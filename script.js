const teamColors = {
    'England Rugby': '#CF142B',
    'France Rugby': '#002395',
    'Ireland Rugby': '#169B62',
    'Scotland Rugby': '#003DA5',
    'Wales Rugby': '#C8102E',
    'Italy Rugby': '#0032A0'
  };

  const API_URL = 'https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4714&s=2026';

  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      const events = data.events;
      displayFixtures(events);
      displayStandings(events);
    })
    .catch(error => {
      console.log('Error:', error);
    });

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
  }

  function displayFixtures(events) {
    const container = document.getElementById('fixtures-list');
    container.innerHTML = '';

    events.forEach(match => {
      const isFinished = match.strStatus === 'FT';

      const card = document.createElement('div');
      card.className = 'match-card';
      const homeColor = teamColors[match.strHomeTeam] || '#1a1a2e';
      const awayColor = teamColors[match.strAwayTeam] || '#1a1a2e';
      card.style.background = `linear-gradient(to right, ${homeColor}55 0%, rgba(6,8,16,0.95) 40%, rgba(6,8,16,0.95)
  60%, ${awayColor}55 100%)`;

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