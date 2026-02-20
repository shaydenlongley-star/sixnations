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
  const ODDS_URL =
  'https://api.the-odds-api.com/v4/sports/rugbyunion_six_nations/odds/?apiKey=e90515b97a1806117af777a4d518a22d&regions=uk&markets=h2h&oddsFormat=decimal';

  Promise.all([
    fetch(FIXTURES_URL).then(r => r.json()),
    fetch(ODDS_URL).then(r => r.json())
  ])
  .then(([fixturesData, oddsData]) => {
    const events = fixturesData.events;
    displayFixtures(events, oddsData);
    displayStandings(events);
  })
  .catch(error => {
    console.log('Error:', error);
  });

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
  }

  function getMatchOdds(oddsData, homeTeam, awayTeam) {
    const homeOddsName = oddsTeamMap[homeTeam];
    const awayOddsName = oddsTeamMap[awayTeam];

    const match = oddsData.find(game =>
      (game.home_team === homeOddsName && game.away_team === awayOddsName) ||
      (game.home_team === awayOddsName && game.away_team === homeOddsName)
    );

    if (!match || !match.bookmakers.length) return null;

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

  function displayFixtures(events, oddsData) {
    const container = document.getElementById('fixtures-list');
    container.innerHTML = '';

    events.forEach(match => {
      const isFinished = match.strStatus === 'FT';
      const card = document.createElement('div');
      card.className = 'match-card';

      const homeColor = teamColors[match.strHomeTeam] || '#1a1a2e';
      const awayColor = teamColors[match.strAwayTeam] || '#1a1a2e';

      let probHTML = '';

      if (!isFinished) {
        const odds = getMatchOdds(oddsData, match.strHomeTeam, match.strAwayTeam);
        if (odds) {
          const split = Math.round(odds.home * 100);
          card.style.background = `linear-gradient(to right, ${homeColor}44 0%, ${homeColor}22 ${split}%, ${awayColor}22 ${split}%, ${awayColor}44 100%)`;
          probHTML = `
            <div class="prob-bar" style="background: linear-gradient(to right, ${homeColor} 0%, ${homeColor} ${split}%, ${awayColor} ${split}%, ${awayColor} 100%);">
              <span class="prob-label-home">${split}%</span>
              <span class="prob-label-away">${100 - split}%</span>
            </div>
          `;
        } else {
          card.style.background = `linear-gradient(to right, ${homeColor}55 0%, rgba(6,8,16,0.95) 40%, rgba(6,8,16,0.95) 60%, ${awayColor}55 100%)`;
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
          <span class="team">
            <img src="${match.strHomeTeamBadge}" alt="${match.strHomeTeam}" class="badge">
            ${match.strHomeTeam.replace(' Rugby', '')}
          </span>
          <span class="score ${isFinished ? 'finished' : ''}">
            ${isFinished ? `${match.intHomeScore} - ${match.intAwayScore}` : 'vs'}
          </span>
          <span class="team away">
            ${match.strAwayTeam.replace(' Rugby', '')}
            <img src="${match.strAwayTeamBadge}" alt="${match.strAwayTeam}" class="badge">
          </span>
        </div>
        ${probHTML}
        <div class="date">${formatDate(match.dateEvent)}</div>
      `;

      container.appendChild(card);
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

      if (!teams[home]) teams[home] = { played: 0, won: 0, lost: 0, drawn: 0, points: 0 };
      if (!teams[away]) teams[away] = { played: 0, won: 0, lost: 0, drawn: 0, points: 0 };

      teams[home].played++;
      teams[away].played++;

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

    const sorted = Object.entries(teams).sort((a, b) => b[1].points - a[1].points);

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
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          ${sorted.map(([name, stats], index) => `
            <tr class="${index === 0 ? 'top' : ''}">
              <td style="border-left: 4px solid ${teamColors[name] || '#666'};">
                ${index + 1}. ${name.replace(' Rugby', '')}
              </td>
              <td>${stats.played}</td>
              <td>${stats.won}</td>
              <td>${stats.lost}</td>
              <td>${stats.drawn}</td>
              <td><strong>${stats.points}</strong></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

