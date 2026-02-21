const teamColors = {
  'England Rugby': '#CF142B',
  'France Rugby': '#002395',
  'Ireland Rugby': '#169B62',
  'Scotland Rugby': '#003DA5',
  'Wales Rugby': '#C8102E',
  'Italy Rugby': '#0032A0'
};

const oddsTeamMap = {
  'England Rugby': 'England',
  'France Rugby': 'France',
  'Ireland Rugby': 'Ireland',
  'Scotland Rugby': 'Scotland',
  'Wales Rugby': 'Wales',
  'Italy Rugby': 'Italy'
};

const FIXTURES_URL = 'https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4714&s=2026';
const ODDS_URL = 'https://api.the-odds-api.com/v4/sports/rugbyunion_six_nations/odds/?apiKey=e90515b97a1806117af777a4d518a22d&regions=uk&markets=h2h&oddsFormat=decimal';

let lastEvents = [];
let lastOddsData = [];
let currentRound = 'all';
let countdownInterval = null;

function load() {
  Promise.all([
    fetch(FIXTURES_URL).then(r => r.json()),
    fetch(ODDS_URL).then(r => r.json()).catch(() => [])
  ])
  .then(([fixturesData, oddsData]) => {
    lastEvents = fixturesData.events || [];
    lastOddsData = Array.isArray(oddsData) ? oddsData : [];
    renderRoundTabs(lastEvents);
    displayFixtures(lastEvents, lastOddsData);
    displayStandings(lastEvents);
    updateLastUpdated();
  })
  .catch(error => {
    console.log('Error:', error);
  });
}

// Auto-refresh every 60 seconds
load();
setInterval(load, 60000);

function updateLastUpdated() {
  const el = document.getElementById('last-updated');
  if (!el) return;
  const now = new Date();
  el.textContent = `Updated ${now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}`;
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
}

function getCountdown(dateStr, timeStr) {
  const matchTime = new Date(`${dateStr}T${timeStr || '15:00:00'}`);
  const now = new Date();
  const diff = matchTime - now;
  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  if (days > 0) return `${days}d ${hours}h ${mins}m`;
  if (hours > 0) return `${hours}h ${mins}m ${secs}s`;
  return `${mins}m ${secs}s`;
}

function startCountdowns() {
  if (countdownInterval) clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    document.querySelectorAll('.countdown[data-date]').forEach(el => {
      const date = el.dataset.date;
      const time = el.dataset.time;
      const text = getCountdown(date, time);
      el.textContent = text ? `Kicks off in ${text}` : '';
    });
  }, 1000);
}

function getMatchOdds(oddsData, homeTeam, awayTeam) {
  const homeOddsName = oddsTeamMap[homeTeam];
  const awayOddsName = oddsTeamMap[awayTeam];

  const match = oddsData.find(game =>
    (game.home_team === homeOddsName && game.away_team === awayOddsName) ||
    (game.home_team === awayOddsName && game.away_team === homeOddsName)
  );

  if (!match || !match.bookmakers || !match.bookmakers.length) return null;

  const homePrices = [];
  const awayPrices = [];

  match.bookmakers.forEach(bookmaker => {
    const market = bookmaker.markets.find(m => m.key === 'h2h');
    if (!market) return;
    const homeOutcome = market.outcomes.find(o => o.name === homeOddsName);
    const awayOutcome = market.outcomes.find(o => o.name === awayOddsName);
    if (homeOutcome) homePrices.push(homeOutcome.price);
    if (awayOutcome) awayPrices.push(awayOutcome.price);
  });

  if (!homePrices.length || !awayPrices.length) return null;

  const avgHome = homePrices.reduce((a, b) => a + b) / homePrices.length;
  const avgAway = awayPrices.reduce((a, b) => a + b) / awayPrices.length;

  const homeProb = 1 / avgHome;
  const awayProb = 1 / avgAway;
  const total = homeProb + awayProb;

  return { home: homeProb / total, away: awayProb / total };
}

function renderRoundTabs(events) {
  const rounds = [...new Set(events.map(e => e.intRound).filter(Boolean))].sort((a, b) => a - b);
  const container = document.getElementById('round-tabs');
  container.innerHTML = '';

  const tabsWrapper = document.createElement('div');
  tabsWrapper.className = 'round-tabs';

  const allTab = document.createElement('button');
  allTab.className = 'round-tab' + (currentRound === 'all' ? ' active' : '');
  allTab.textContent = 'All';
  allTab.onclick = () => setRound('all');
  tabsWrapper.appendChild(allTab);

  rounds.forEach(r => {
    const tab = document.createElement('button');
    tab.className = 'round-tab' + (currentRound === String(r) ? ' active' : '');
    tab.textContent = `Round ${r}`;
    tab.onclick = () => setRound(String(r));
    tabsWrapper.appendChild(tab);
  });

  container.appendChild(tabsWrapper);
}

function setRound(round) {
  currentRound = round;
  document.querySelectorAll('.round-tab').forEach(tab => {
    tab.classList.toggle('active',
      (round === 'all' && tab.textContent === 'All') ||
      tab.textContent === `Round ${round}`
    );
  });
  displayFixtures(lastEvents, lastOddsData);
}

function displayFixtures(events, oddsData) {
  const container = document.getElementById('fixtures-list');
  container.innerHTML = '';

  const filtered = currentRound === 'all'
    ? events
    : events.filter(e => String(e.intRound) === currentRound);

  filtered.forEach(match => {
    const isFinished = match.strStatus === 'FT';
    const card = document.createElement('div');
    card.className = 'match-card';

    const homeColor = teamColors[match.strHomeTeam] || '#1a1a2e';
    const awayColor = teamColors[match.strAwayTeam] || '#1a1a2e';

    let probHTML = '';
    let countdownHTML = '';

    if (!isFinished) {
      const odds = getMatchOdds(oddsData, match.strHomeTeam, match.strAwayTeam);
      if (odds) {
        const split = Math.round(odds.home * 100);
        const blendStart = Math.max(split - 12, 0);
        const blendEnd = Math.min(split + 12, 100);
        card.style.background = `linear-gradient(to right, ${homeColor}55 0%, ${homeColor}22 ${blendStart}%, ${awayColor}22 ${blendEnd}%, ${awayColor}55 100%)`;
        probHTML = `
          <div class="prob-bar" style="background: linear-gradient(to right, ${homeColor} 0%, ${homeColor}cc ${blendStart}%, ${awayColor}cc ${blendEnd}%, ${awayColor} 100%);">
            <span class="prob-label-home">${split}%</span>
            <span class="prob-label-away">${100 - split}%</span>
          </div>
        `;
      } else {
        card.style.background = `linear-gradient(to right, ${homeColor}55 0%, rgba(6,8,16,0.95) 40%, rgba(6,8,16,0.95) 60%, ${awayColor}55 100%)`;
      }

      const initialCountdown = getCountdown(match.dateEvent, match.strTime);
      if (initialCountdown) {
        countdownHTML = `<div class="countdown" data-date="${match.dateEvent}" data-time="${match.strTime || '15:00:00'}">Kicks off in ${initialCountdown}</div>`;
      }
    } else {
      card.style.background = `linear-gradient(to right, ${homeColor}55 0%, rgba(6,8,16,0.95) 40%, rgba(6,8,16,0.95) 60%, ${awayColor}55 100%)`;
    }

    card.innerHTML = `
      <div class="card-top">
        <div class="round">Round ${match.intRound}</div>
        <div class="status-badge ${isFinished ? 'ft' : 'upcoming'}">${isFinished ? 'Full Time' : 'Upcoming'}</div>
      </div>
      <div class="match">
        <a href="team.html?team=${encodeURIComponent(match.strHomeTeam)}"><img src="${match.strHomeTeamBadge}" alt="${match.strHomeTeam}" class="badge"></a>
        <span class="team-name">${match.strHomeTeam.replace(' Rugby', '')}</span>
        <span class="score ${isFinished ? 'finished' : ''}">
          <span class="match-date">${formatDate(match.dateEvent)}</span>
          ${isFinished ? `<span class="score-num" data-target="${match.intHomeScore}">0</span> - <span class="score-num" data-target="${match.intAwayScore}">0</span>` : 'vs'}
          ${countdownHTML}
        </span>
        <span class="team-name away-name">${match.strAwayTeam.replace(' Rugby', '')}</span>
        <a href="team.html?team=${encodeURIComponent(match.strAwayTeam)}"><img src="${match.strAwayTeamBadge}" alt="${match.strAwayTeam}" class="badge"></a>
      </div>
      ${probHTML}
    `;

    container.appendChild(card);
  });

  startCountdowns();
  observeScores();
}

function animateScore(el, target) {
  const duration = 700;
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function observeScores() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.score-num').forEach(el => {
        animateScore(el, parseInt(el.dataset.target));
      });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.match-card').forEach(card => {
    if (card.querySelector('.score-num')) observer.observe(card);
  });
}

function displayStandings(events) {
  const teams = {};

  events.forEach(match => {
    if (match.strStatus !== 'FT') return;

    const home = match.strHomeTeam;
    const away = match.strAwayTeam;
    const homeScore = parseInt(match.intHomeScore);
    const awayScore = parseInt(match.intAwayScore);

    if (!teams[home]) teams[home] = { played: 0, won: 0, lost: 0, drawn: 0, points: 0, pf: 0, pa: 0 };
    if (!teams[away]) teams[away] = { played: 0, won: 0, lost: 0, drawn: 0, points: 0, pf: 0, pa: 0 };

    teams[home].played++;
    teams[away].played++;
    teams[home].pf += homeScore;
    teams[home].pa += awayScore;
    teams[away].pf += awayScore;
    teams[away].pa += homeScore;

    if (homeScore > awayScore) {
      teams[home].won++;
      teams[home].points += 4;
      teams[away].lost++;
    } else if (awayScore > homeScore) {
      teams[away].won++;
      teams[away].points += 4;
      teams[home].lost++;
    } else {
      teams[home].drawn++;
      teams[away].drawn++;
      teams[home].points += 2;
      teams[away].points += 2;
    }
  });

  const sorted = Object.entries(teams).sort((a, b) => {
    const ptsDiff = b[1].points - a[1].points;
    if (ptsDiff !== 0) return ptsDiff;
    const pdDiff = (b[1].pf - b[1].pa) - (a[1].pf - a[1].pa);
    if (pdDiff !== 0) return pdDiff;
    return b[1].pf - a[1].pf;
  });

  const container = document.getElementById('standings-table');
  container.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Team</th>
          <th>P</th>
          <th>W</th>
          <th>L</th>
          <th>D</th>
          <th>PF</th>
          <th>PA</th>
          <th>Pts</th>
        </tr>
      </thead>
      <tbody>
        ${sorted.map(([name, stats], index) => `
          <tr class="${index === 0 ? 'top' : ''}">
            <td style="border-left: 4px solid ${teamColors[name] || '#666'};">
              ${index === 0 ? `<svg class="trophy-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4v7a5 5 0 0 0 10 0V4"/><path d="M17 5h2a2 2 0 0 1 2 2v1a4 4 0 0 1-4 4"/><path d="M7 5H5a2 2 0 0 0-2 2v1a4 4 0 0 0 4 4"/></svg>` : `${index + 1}.`} <a href="team.html?team=${encodeURIComponent(name)}" class="team-link">${name.replace(' Rugby', '')}</a>
            </td>
            <td>${stats.played}</td>
            <td>${stats.won}</td>
            <td>${stats.lost}</td>
            <td>${stats.drawn}</td>
            <td>${stats.pf}</td>
            <td>${stats.pa}</td>
            <td><strong>${stats.points}</strong></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}
