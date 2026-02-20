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

  function displayFixtures(events) {
    const container = document.getElementById('fixtures-list');
    container.innerHTML = '';

    events.forEach(match => {
      const isFinished = match.strStatus === 'FT';

      const card = document.createElement('div');
      card.className = 'match-card';

       card.innerHTML = `
        <div class="round">Round ${match.intRound}</div>
        <div class="match">
          <span class="team">
            <img src="${match.strHomeTeamBadge}" alt="${match.strHomeTeam}" class="badge">
            ${match.strHomeTeam}
          </span>
          <span class="score">
            ${isFinished ? `${match.intHomeScore} - ${match.intAwayScore}` : 'vs'}
          </span>
          <span class="team away">
            ${match.strAwayTeam}
            <img src="${match.strAwayTeamBadge}" alt="${match.strAwayTeam}" class="badge">
          </span>
        </div>
        <div class="date">${match.dateEvent}</div>
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
            <tr>
              <td>${index + 1}. ${name}</td>
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