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

// Updated after each round — last updated: Round 3
const tryScorers = [
  { name: 'Henry Arundell',       team: 'England Rugby', tries: 4 },
  { name: 'Theo Attissogbe',      team: 'France Rugby',  tries: 3 },
  { name: 'Louis Bielle-Biarrey', team: 'France Rugby',  tries: 3 },
  { name: 'Ben Earl',             team: 'England Rugby', tries: 2 },
  { name: 'Matthieu Jalibert',    team: 'France Rugby',  tries: 2 },
  { name: 'Huw Jones',            team: 'Scotland Rugby',tries: 2 },
  { name: 'Charles Ollivon',      team: 'France Rugby',  tries: 2 },
];

const TROPHY_SVG = `<svg class="trophy-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4v7a5 5 0 0 0 10 0V4"/><path d="M17 5h2a2 2 0 0 1 2 2v1a4 4 0 0 1-4 4"/><path d="M7 5H5a2 2 0 0 0-2 2v1a4 4 0 0 0 4 4"/></svg>`;

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

load();
setInterval(load, 60000);
displayTryScorers();

document.getElementById('try-scorers-toggle').addEventListener('click', () => {
  document.getElementById('try-scorers-toggle').classList.toggle('open');
  document.getElementById('try-scorers-list').classList.toggle('open');
});

document.getElementById('grand-slam-toggle').addEventListener('click', () => {
  document.getElementById('grand-slam-toggle').classList.toggle('open');
  document.getElementById('grand-slam').classList.toggle('open');
});

function displayTryScorers() {
  const container = document.getElementById('try-scorers-list');
  if (!container) return;

  const maxTries = tryScorers[0].tries;
  const rankColors = ['#FFD700', '#C0C0C0', '#CD7F32'];

  container.innerHTML = tryScorers.map((player, index) => {
    const color = teamColors[player.team] || '#666';
    const pct = Math.round((player.tries / maxTries) * 100);
    const rankColor = rankColors[index] || 'rgba(255,255,255,0.25)';

    return `
      <div class="try-row" style="border-left: 3px solid ${color}; background: linear-gradient(135deg, ${color}18 0%, rgba(6,8,16,0) 60%);">
        <span class="try-rank" style="color: ${rankColor};">${index + 1}</span>
        <div class="try-player">
          <div class="try-player-name">${player.name}</div>
          <div class="try-bottom">
            <span class="try-team-badge" style="border-color: ${color}66;">${player.team.replace(' Rugby', '')}</span>
            <div class="try-bar-track">
              <div class="try-bar-fill" style="width: ${pct}%; background: ${color};"></div>
            </div>
          </div>
        </div>
        <div class="try-count">${player.tries}<span class="try-label">tries</span></div>
      </div>
    `;
  }).join('');
}

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
      const text = getCountdown(el.dataset.date, el.dataset.time);
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
          ${isFinished ? `<span class="score-line"><span class="score-num" data-target="${match.intHomeScore}">0</span> - <span class="score-num" data-target="${match.intAwayScore}">0</span></span>` : 'vs'}
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
  const teamForm = {};

  const sortedFinished = [...events]
    .filter(e => e.strStatus === 'FT')
    .sort((a, b) => new Date(a.dateEvent) - new Date(b.dateEvent));

  sortedFinished.forEach(match => {
    const home = match.strHomeTeam;
    const away = match.strAwayTeam;
    const homeScore = parseInt(match.intHomeScore);
    const awayScore = parseInt(match.intAwayScore);
    const margin = Math.abs(homeScore - awayScore);

    if (!teams[home]) teams[home] = { played: 0, won: 0, lost: 0, drawn: 0, points: 0, pf: 0, pa: 0, bp: 0 };
    if (!teams[away]) teams[away] = { played: 0, won: 0, lost: 0, drawn: 0, points: 0, pf: 0, pa: 0, bp: 0 };
    if (!teamForm[home]) teamForm[home] = [];
    if (!teamForm[away]) teamForm[away] = [];

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
      teamForm[home].push('W');
      teamForm[away].push('L');
      if (margin <= 7) {
        teams[away].bp++;
        teams[away].points++;
      }
    } else if (awayScore > homeScore) {
      teams[away].won++;
      teams[away].points += 4;
      teams[home].lost++;
      teamForm[away].push('W');
      teamForm[home].push('L');
      if (margin <= 7) {
        teams[home].bp++;
        teams[home].points++;
      }
    } else {
      teams[home].drawn++;
      teams[away].drawn++;
      teams[home].points += 2;
      teams[away].points += 2;
      teamForm[home].push('D');
      teamForm[away].push('D');
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
          <th>PD</th>
          <th>BP</th>
          <th>Pts</th>
        </tr>
      </thead>
      <tbody>
        ${sorted.map(([name, stats], index) => {
          const pd = stats.pf - stats.pa;
          const formDots = (teamForm[name] || []).slice(-5).map(r =>
            `<span class="form-dot ${r}" title="${r === 'W' ? 'Win' : r === 'L' ? 'Loss' : 'Draw'}"></span>`
          ).join('');
          return `
            <tr class="${index === 0 ? 'top' : ''}">
              <td style="border-left: 4px solid ${teamColors[name] || '#666'};">
                <div class="team-cell">
                  <span>${index === 0 ? TROPHY_SVG : `${index + 1}.`} <a href="team.html?team=${encodeURIComponent(name)}" class="team-link">${name.replace(' Rugby', '')}</a></span>
                  <span class="form-dots">${formDots}</span>
                </div>
              </td>
              <td>${stats.played}</td>
              <td>${stats.won}</td>
              <td>${stats.lost}</td>
              <td>${stats.drawn}</td>
              <td>${stats.pf}</td>
              <td>${stats.pa}</td>
              <td>${pd >= 0 ? '+' : ''}${pd}</td>
              <td>${stats.bp}</td>
              <td><strong>${stats.points}</strong></td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
  `;

  displayGrandSlam(teams, teamForm);
}

function displayGrandSlam(teams, teamForm) {
  const container = document.getElementById('grand-slam');
  if (!container) return;

  const teamsWithGames = Object.entries(teams)
    .filter(([_, s]) => s.played > 0)
    .sort((a, b) => b[1].points - a[1].points);

  if (teamsWithGames.length === 0) {
    container.innerHTML = '<p style="color:rgba(255,255,255,0.4);font-family:\'Inter\',sans-serif;font-size:0.9rem;">Tournament not yet started.</p>';
    return;
  }

  container.innerHTML = teamsWithGames.map(([name, stats]) => {
    const onTrack = stats.lost === 0 && stats.drawn === 0;
    const color = teamColors[name] || '#666';
    return `
      <div class="gs-card" style="border-left: 3px solid ${color};">
        <span class="gs-team">${name.replace(' Rugby', '')}</span>
        <span class="gs-record">${stats.won}W ${stats.drawn}D ${stats.lost}L</span>
        <span class="gs-badge ${onTrack ? 'on-track' : 'eliminated'}">${onTrack ? 'In Contention' : 'Eliminated'}</span>
      </div>
    `;
  }).join('');
}
