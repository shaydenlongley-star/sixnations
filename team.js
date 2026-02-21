const squads = {
  'England Rugby': {
    color: '#CF142B',
    captain: 'Maro Itoje',
    players: [
      { name: 'Ellis Genge', position: 'Loosehead Prop' },
      { name: 'Bevan Rodd', position: 'Loosehead Prop' },
      { name: 'Vilikesa Sela', position: 'Loosehead Prop' },
      { name: 'Joe Heyes', position: 'Tighthead Prop' },
      { name: 'Emmanuel Iyogun', position: 'Tighthead Prop' },
      { name: 'Trevor Davison', position: 'Prop' },
      { name: 'Jamie George', position: 'Hooker' },
      { name: 'Theo Dan', position: 'Hooker' },
      { name: 'Luke Cowan-Dickie', position: 'Hooker' },
      { name: 'Maro Itoje', position: 'Lock' },
      { name: 'Ollie Chessum', position: 'Lock' },
      { name: 'Arthur Clark', position: 'Lock' },
      { name: 'Alex Coles', position: 'Lock' },
      { name: 'Guy Pepper', position: 'Lock' },
      { name: 'Henry Pollock', position: 'Lock' },
      { name: 'Tom Curry', position: 'Flanker' },
      { name: 'Sam Underhill', position: 'Flanker' },
      { name: 'Chandler Cunningham-South', position: 'Flanker' },
      { name: 'Greg Fisilau', position: 'Number 8' },
      { name: 'Ben Earl', position: 'Number 8' },
      { name: 'Alex Mitchell', position: 'Scrum-half' },
      { name: 'Ben Spencer', position: 'Scrum-half' },
      { name: 'Jack van Poortvliet', position: 'Scrum-half' },
      { name: 'Marcus Smith', position: 'Fly-half' },
      { name: 'George Ford', position: 'Fly-half' },
      { name: 'Henry Slade', position: 'Centre' },
      { name: 'Fraser Dingwall', position: 'Centre' },
      { name: 'Max Ojomoh', position: 'Centre' },
      { name: 'Ollie Lawrence', position: 'Centre' },
      { name: 'Seb Atkinson', position: 'Centre' },
      { name: 'Tommy Freeman', position: 'Wing' },
      { name: 'Immanuel Feyi-Waboso', position: 'Wing' },
      { name: 'Henry Arundell', position: 'Wing' },
      { name: 'Tom Roebuck', position: 'Wing' },
      { name: 'Elliot Daly', position: 'Wing' },
      { name: 'Cadan Murley', position: 'Wing' },
      { name: 'George Furbank', position: 'Fullback' },
      { name: 'Freddie Steward', position: 'Fullback' },
    ]
  },
  'France Rugby': {
    color: '#002395',
    captain: 'Antoine Dupont',
    players: [
      { name: 'Cyril Baille', position: 'Loosehead Prop' },
      { name: 'Jean-Baptiste Gros', position: 'Loosehead Prop' },
      { name: 'Dorian Aldegheri', position: 'Tighthead Prop' },
      { name: 'Uini Atonio', position: 'Tighthead Prop' },
      { name: 'Rodrigue Neti', position: 'Tighthead Prop' },
      { name: 'Paul Boudehent', position: 'Prop' },
      { name: 'Temo Matiu', position: 'Prop' },
      { name: 'Alexandre Fischer', position: 'Prop' },
      { name: 'Régis Montagne', position: 'Prop' },
      { name: 'Julien Marchand', position: 'Hooker' },
      { name: 'Peato Mauvaka', position: 'Hooker' },
      { name: 'Tevita Tatafu', position: 'Hooker' },
      { name: 'Charles Ollivon', position: 'Lock' },
      { name: 'Thibaud Flament', position: 'Lock' },
      { name: 'Hugo Auradou', position: 'Lock' },
      { name: 'Emmanuel Meafou', position: 'Lock' },
      { name: 'Mickaël Guillard', position: 'Lock' },
      { name: 'Cameron Woki', position: 'Lock' },
      { name: 'François Cros', position: 'Flanker' },
      { name: 'Oscar Jegou', position: 'Flanker' },
      { name: 'Maxime Lamothe', position: 'Flanker' },
      { name: 'Thomas Staniforth', position: 'Flanker' },
      { name: 'Anthony Jelonch', position: 'Number 8' },
      { name: 'Antoine Dupont', position: 'Scrum-half' },
      { name: 'Baptiste Serin', position: 'Scrum-half' },
      { name: 'Ugo Seunes', position: 'Scrum-half' },
      { name: 'Matthieu Jalibert', position: 'Fly-half' },
      { name: 'Yoram Moefana', position: 'Centre' },
      { name: 'Nicolas Depoortere', position: 'Centre' },
      { name: 'Emilien Gailleton', position: 'Centre' },
      { name: 'Fabien Brau-Boirie', position: 'Centre' },
      { name: 'Kalvin Gourgues', position: 'Centre' },
      { name: 'Georges-Henri Colombe', position: 'Prop' },
      { name: 'Pierre-Louis Barassi', position: 'Fullback' },
      { name: 'Louis Bielle-Biarrey', position: 'Wing' },
      { name: 'Théo Attissogbe', position: 'Wing' },
      { name: 'Grégoire Arfeuil', position: 'Wing' },
      { name: 'Noah Nene', position: 'Wing' },
      { name: 'Aaron Grandidier Nkanang', position: 'Wing' },
      { name: 'Lenni Nouchi', position: 'Wing' },
      { name: 'Thomas Ramos', position: 'Fullback' },
      { name: 'Romain Buros', position: 'Fullback' },
      { name: 'Thibault Daubagna', position: 'Fullback' },
      { name: 'Fabien Brau-Boirie', position: 'Fullback' },
      { name: 'Gaël Dréan', position: 'Fullback' },
    ]
  },
  'Ireland Rugby': {
    color: '#169B62',
    captain: 'Caelan Doris',
    players: [
      { name: 'Jeremy Loughman', position: 'Loosehead Prop' },
      { name: 'Finlay Bealham', position: 'Loosehead Prop' },
      { name: 'Michael Milne', position: 'Loosehead Prop' },
      { name: 'Tadhg Furlong', position: 'Tighthead Prop' },
      { name: 'Tom O\'Toole', position: 'Tighthead Prop' },
      { name: 'Tom Stewart', position: 'Tighthead Prop' },
      { name: 'Thomas Clarkson', position: 'Tighthead Prop' },
      { name: 'Rónan Kelleher', position: 'Hooker' },
      { name: 'Dan Sheehan', position: 'Hooker' },
      { name: 'Joe McCarthy', position: 'Lock' },
      { name: 'James Ryan', position: 'Lock' },
      { name: 'Tom Ahern', position: 'Lock' },
      { name: 'Edwin Edogbo', position: 'Lock' },
      { name: 'Tadhg Beirne', position: 'Flanker' },
      { name: 'Josh van der Flier', position: 'Flanker' },
      { name: 'Jack Boyle', position: 'Flanker' },
      { name: 'Jack Conan', position: 'Flanker' },
      { name: 'Cian Prendergast', position: 'Flanker' },
      { name: 'Nick Timoney', position: 'Flanker' },
      { name: 'Caelan Doris', position: 'Number 8' },
      { name: 'Craig Casey', position: 'Scrum-half' },
      { name: 'Nathan Doak', position: 'Scrum-half' },
      { name: 'Jamison Gibson-Park', position: 'Scrum-half' },
      { name: 'Harry Byrne', position: 'Fly-half' },
      { name: 'Jack Crowley', position: 'Fly-half' },
      { name: 'Sam Prendergast', position: 'Fly-half' },
      { name: 'Bundee Aki', position: 'Centre' },
      { name: 'Tom Farrell', position: 'Centre' },
      { name: 'Garry Ringrose', position: 'Centre' },
      { name: 'Stuart McCloskey', position: 'Centre' },
      { name: 'Robert Baloucoune', position: 'Wing' },
      { name: 'James Lowe', position: 'Wing' },
      { name: 'Jacob Stockdale', position: 'Wing' },
      { name: 'Jude Postlethwaite', position: 'Wing' },
      { name: 'Hugo Keenan', position: 'Fullback' },
      { name: 'Tommy O\'Brien', position: 'Fullback' },
      { name: 'Jamie Osborne', position: 'Fullback' },
      { name: 'Ciaran Frawley', position: 'Fullback' },
    ]
  },
  'Scotland Rugby': {
    color: '#003DA5',
    captain: 'Sione Tuipulotu',
    players: [
      { name: 'Pierre Schoeman', position: 'Loosehead Prop' },
      { name: 'Rory Sutherland', position: 'Loosehead Prop' },
      { name: 'Elliot Millar Mills', position: 'Loosehead Prop' },
      { name: 'Freddy Douglas', position: 'Loosehead Prop' },
      { name: 'Zander Fagerson', position: 'Tighthead Prop' },
      { name: 'Dave Cherry', position: 'Hooker' },
      { name: 'Ewan Ashman', position: 'Hooker' },
      { name: 'Liam McConnell', position: 'Hooker' },
      { name: 'George Turner', position: 'Hooker' },
      { name: 'Scott Cummings', position: 'Lock' },
      { name: 'Jonny Gray', position: 'Lock' },
      { name: 'Alex Craig', position: 'Lock' },
      { name: 'Grant Gilchrist', position: 'Lock' },
      { name: 'Gregor Brown', position: 'Lock' },
      { name: 'Max Williamson', position: 'Lock' },
      { name: 'Magnus Bradbury', position: 'Flanker' },
      { name: 'Rory Darge', position: 'Flanker' },
      { name: 'Jack Dempsey', position: 'Flanker' },
      { name: 'Jamie Ritchie', position: 'Flanker' },
      { name: 'Matt Fagerson', position: 'Flanker' },
      { name: 'Nathan McBeth', position: 'Flanker' },
      { name: 'Josh Bayliss', position: 'Number 8' },
      { name: 'Finn Russell', position: 'Fly-half' },
      { name: 'Adam Hastings', position: 'Fly-half' },
      { name: 'Fergus Burke', position: 'Fly-half' },
      { name: 'George Horne', position: 'Scrum-half' },
      { name: 'Jamie Dobie', position: 'Scrum-half' },
      { name: 'Ben White', position: 'Scrum-half' },
      { name: 'Rory Hutchinson', position: 'Centre' },
      { name: 'Stafford McDowall', position: 'Centre' },
      { name: 'Sione Tuipulotu', position: 'Centre' },
      { name: 'Huw Jones', position: 'Centre' },
      { name: 'Kyle Rowe', position: 'Wing' },
      { name: 'Darcy Graham', position: 'Wing' },
      { name: 'Duhan van der Merwe', position: 'Wing' },
      { name: 'Kyle Steyn', position: 'Wing' },
      { name: 'Ollie Smith', position: 'Wing' },
      { name: 'Tom Jordan', position: 'Fullback' },
      { name: 'Blair Kinghorn', position: 'Fullback' },
      { name: 'D\'arcy Rae', position: 'Fullback' },
    ]
  },
  'Wales Rugby': {
    color: '#C8102E',
    captain: 'Dewi Lake',
    players: [
      { name: 'Rhys Carre', position: 'Loosehead Prop' },
      { name: 'Keiron Assiratti', position: 'Loosehead Prop' },
      { name: 'Nicky Smith', position: 'Loosehead Prop' },
      { name: 'Tomas Francis', position: 'Tighthead Prop' },
      { name: 'Gareth Thomas', position: 'Tighthead Prop' },
      { name: 'Dewi Lake', position: 'Hooker' },
      { name: 'Liam Belcher', position: 'Hooker' },
      { name: 'Ryan Elias', position: 'Hooker' },
      { name: 'Adam Beard', position: 'Lock' },
      { name: 'Ben Carter', position: 'Lock' },
      { name: 'Dafydd Jenkins', position: 'Lock' },
      { name: 'Alex Mann', position: 'Lock' },
      { name: 'Josh Macleod', position: 'Flanker' },
      { name: 'Aaron Wainwright', position: 'Flanker' },
      { name: 'James Botham', position: 'Flanker' },
      { name: 'Olly Cracknell', position: 'Flanker' },
      { name: 'Archie Griffin', position: 'Flanker' },
      { name: 'Taine Plumtree', position: 'Number 8' },
      { name: 'Freddie Thomas', position: 'Number 8' },
      { name: 'Dan Edwards', position: 'Scrum-half' },
      { name: 'Tomos Williams', position: 'Scrum-half' },
      { name: 'Kieran Hardy', position: 'Scrum-half' },
      { name: 'Reuben Morgan-Williams', position: 'Scrum-half' },
      { name: 'Jarrod Evans', position: 'Fly-half' },
      { name: 'Sam Costelow', position: 'Fly-half' },
      { name: 'Eddie James', position: 'Centre' },
      { name: 'Joe Hawkins', position: 'Centre' },
      { name: 'Gabriel Hamer-Webb', position: 'Centre' },
      { name: 'Ben Thomas', position: 'Centre' },
      { name: 'Owen Watkin', position: 'Centre' },
      { name: 'Mason Grady', position: 'Centre' },
      { name: 'Josh Adams', position: 'Wing' },
      { name: 'Ellis Mee', position: 'Wing' },
      { name: 'Louis Rees-Zammit', position: 'Wing' },
      { name: 'Tom Rogers', position: 'Wing' },
      { name: 'Blair Murray', position: 'Fullback' },
      { name: 'Louie Hennessey', position: 'Fullback' },
      { name: 'Harri Deaves', position: 'Fullback' },
    ]
  },
  'Italy Rugby': {
    color: '#0032A0',
    captain: 'Michele Lamaro',
    players: [
      { name: 'Danilo Fischetti', position: 'Loosehead Prop' },
      { name: 'Tommaso Di Bartolomeo', position: 'Loosehead Prop' },
      { name: 'Simone Ferrari', position: 'Tighthead Prop' },
      { name: 'Mirco Spagnolo', position: 'Tighthead Prop' },
      { name: 'Pablo Dimcheff', position: 'Prop' },
      { name: 'Giacomo Nicotera', position: 'Hooker' },
      { name: 'Matt Gallagher', position: 'Hooker' },
      { name: 'Federico Ruzza', position: 'Lock' },
      { name: 'Muhamed Hasa', position: 'Lock' },
      { name: 'Andrea Zambonin', position: 'Lock' },
      { name: 'Michele Lamaro', position: 'Flanker' },
      { name: 'Lorenzo Cannone', position: 'Flanker' },
      { name: 'Alessandro Izekor', position: 'Flanker' },
      { name: 'Alessandro Garbisi', position: 'Fly-half' },
      { name: 'Davide Odiase', position: 'Flanker' },
      { name: 'Manuel Zuliani', position: 'Flanker' },
      { name: 'Giosuè Zilocchi', position: 'Tighthead Prop' },
      { name: 'Niccolò Cannone', position: 'Number 8' },
      { name: 'Stephen Varney', position: 'Scrum-half' },
      { name: 'Alessandro Fusco', position: 'Scrum-half' },
      { name: 'Samuele Locatelli', position: 'Scrum-half' },
      { name: 'Paolo Garbisi', position: 'Fly-half' },
      { name: 'Leonardo Marin', position: 'Fly-half' },
      { name: 'Juan Ignacio Brex', position: 'Centre' },
      { name: 'Tommaso Menoncello', position: 'Centre' },
      { name: 'Damiano Mazza', position: 'Centre' },
      { name: 'Riccardo Favretto', position: 'Centre' },
      { name: 'Monty Ioane', position: 'Wing' },
      { name: 'Louis Lynagh', position: 'Wing' },
      { name: 'Paolo Odogwu', position: 'Wing' },
      { name: 'Lorenzo Pani', position: 'Wing' },
      { name: 'Ange Capuozzo', position: 'Fullback' },
      { name: 'Giacomo Da Re', position: 'Fullback' },
      { name: 'Edoardo Todaro', position: 'Fullback' },
      { name: 'Martin Page-Relo', position: 'Fullback' },
      { name: 'Alessandro Garbski', position: 'Fullback' },
    ]
  }
};

// Jersey numbers from official sixnationsrugby.com Round 3 team sheets
const jerseyNumbers = {
  'England Rugby': {
    'Ellis Genge': 1, 'Luke Cowan-Dickie': 2, 'Joe Heyes': 3,
    'Maro Itoje': 4, 'Ollie Chessum': 5, 'Tom Curry': 6,
    'Ben Earl': 7, 'Henry Pollock': 8, 'Alex Mitchell': 9,
    'George Ford': 10, 'Henry Arundell': 11, 'Fraser Dingwall': 12,
    'Ollie Lawrence': 13, 'Tommy Freeman': 14, 'Freddie Steward': 15,
    'Jamie George': 16, 'Bevan Rodd': 17, 'Trevor Davison': 18,
    'Alex Coles': 19, 'Guy Pepper': 20, 'Sam Underhill': 21,
    'Jack van Poortvliet': 22, 'Marcus Smith': 23,
  },
  'Wales Rugby': {
    'Rhys Carre': 1, 'Dewi Lake': 2, 'Tomas Francis': 3,
    'Dafydd Jenkins': 4, 'Ben Carter': 5, 'Taine Plumtree': 6,
    'Alex Mann': 7, 'Aaron Wainwright': 8, 'Tomos Williams': 9,
    'Sam Costelow': 10, 'Josh Adams': 11, 'Joe Hawkins': 12,
    'Eddie James': 13, 'Gabriel Hamer-Webb': 14, 'Louis Rees-Zammit': 15,
    'Ryan Elias': 16, 'Nicky Smith': 17, 'Archie Griffin': 18,
    'Freddie Thomas': 19, 'James Botham': 20, 'Kieran Hardy': 21,
    'Jarrod Evans': 22, 'Blair Murray': 23,
  },
  'France Rugby': {
    'Jean-Baptiste Gros': 1, 'Julien Marchand': 2, 'Dorian Aldegheri': 3,
    'Thibaud Flament': 4, 'Emmanuel Meafou': 5, 'François Cros': 6,
    'Oscar Jegou': 7, 'Anthony Jelonch': 8, 'Antoine Dupont': 9,
    'Matthieu Jalibert': 10, 'Louis Bielle-Biarrey': 11, 'Fabien Brau-Boirie': 12,
    'Emilien Gailleton': 13, 'Théo Attissogbe': 14, 'Thomas Ramos': 15,
    'Peato Mauvaka': 16, 'Rodrigue Neti': 17, 'Georges-Henri Colombe': 18,
    'Charles Ollivon': 19, 'Mickaël Guillard': 20, 'Lenni Nouchi': 21,
    'Baptiste Serin': 22, 'Pierre-Louis Barassi': 23,
  },
  'Ireland Rugby': {
    'Jeremy Loughman': 1, 'Dan Sheehan': 2, 'Tadhg Furlong': 3,
    'Joe McCarthy': 4, 'James Ryan': 5, 'Tadhg Beirne': 6,
    'Josh van der Flier': 7, 'Caelan Doris': 8, 'Jamison Gibson-Park': 9,
    'Jack Crowley': 10, 'James Lowe': 11, 'Stuart McCloskey': 12,
    'Garry Ringrose': 13, 'Robert Baloucoune': 14, 'Jamie Osborne': 15,
    'Rónan Kelleher': 16, 'Tom O\'Toole': 17, 'Finlay Bealham': 18,
    'Nick Timoney': 19, 'Jack Conan': 20, 'Craig Casey': 21,
    'Ciaran Frawley': 22, 'Tommy O\'Brien': 23,
  },
  'Italy Rugby': {
    'Danilo Fischetti': 1, 'Giacomo Nicotera': 2, 'Simone Ferrari': 3,
    'Niccolò Cannone': 4, 'Andrea Zambonin': 5, 'Michele Lamaro': 6,
    'Manuel Zuliani': 7, 'Lorenzo Cannone': 8, 'Alessandro Fusco': 9,
    'Paolo Garbisi': 10, 'Monty Ioane': 11, 'Leonardo Marin': 12,
    'Tommaso Menoncello': 13, 'Louis Lynagh': 14, 'Ange Capuozzo': 15,
    'Pablo Dimcheff': 16, 'Mirco Spagnolo': 17, 'Giosuè Zilocchi': 18,
    'Federico Ruzza': 19, 'Riccardo Favretto': 20, 'Davide Odiase': 21,
    'Alessandro Garbisi': 22, 'Paolo Odogwu': 23,
  },
  'Scotland Rugby': {
    'Nathan McBeth': 1, 'Dave Cherry': 2, 'Zander Fagerson': 3,
    'Max Williamson': 4, 'Scott Cummings': 5, 'Gregor Brown': 6,
    'Rory Darge': 7, 'Matt Fagerson': 8, 'Ben White': 9,
    'Finn Russell': 10, 'Duhan van der Merwe': 11, 'Sione Tuipulotu': 12,
    'Huw Jones': 13, 'Kyle Steyn': 14, 'Blair Kinghorn': 15,
    'George Turner': 16, 'Pierre Schoeman': 17, 'Elliot Millar Mills': 18,
    'Grant Gilchrist': 19, 'Josh Bayliss': 20, 'George Horne': 21,
    'Tom Jordan': 22, 'Darcy Graham': 23,
  },
};

function assignNumbers(players, teamName) {
  const lookup = jerseyNumbers[teamName] || {};
  return players.map(player => {
    const jersey = lookup[player.name] ?? null;
    let category = 'squad';
    if (jersey !== null && jersey <= 15) category = 'starters';
    else if (jersey !== null && jersey <= 23) category = 'bench';
    return { ...player, jersey, category };
  });
}

function buildSection(title, players, teamColor, captain) {
  if (!players.length) return null;

  const section = document.createElement('div');
  section.className = 'squad-section';
  section.innerHTML = `<h3 class="section-title">${title}</h3>`;

  const grid = document.createElement('div');
  grid.className = 'players-grid';

  players.forEach(player => {
    const isCaptain = player.name === captain;
    const card = document.createElement('div');
    card.className = 'player-card' + (isCaptain ? ' captain' : '');
    if (isCaptain) card.style.borderColor = teamColor + '88';

    card.innerHTML = `
      <div class="player-row">
        <span class="jersey-number" style="color: ${teamColor};">${player.jersey !== null ? '#' + player.jersey : '—'}</span>
        <div class="player-info">
          <div class="player-name">${player.name}</div>
          <div class="player-position">${player.position}</div>
          ${isCaptain ? '<span class="captain-badge">Captain</span>' : ''}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  section.appendChild(grid);
  return section;
}

const params = new URLSearchParams(window.location.search);
const teamName = params.get('team');
const team = squads[teamName];

if (!team) {
  document.body.innerHTML = '<p style="padding:40px;color:white;font-family:sans-serif;">Team not found.</p>';
} else {
  document.title = teamName.replace(' Rugby', '') + ' Squad';
  document.getElementById('team-title').textContent = teamName.replace(' Rugby', '');
  document.getElementById('team-subtitle').textContent = '2026 Six Nations Squad';

  const header = document.getElementById('team-header');
  header.style.borderBottomColor = team.color;
  header.style.background = `linear-gradient(135deg, #0d0d1a 0%, ${team.color}33 60%, ${team.color}55 100%)`;

  const container = document.getElementById('squad-container');
  const numbered = assignNumbers(team.players, teamName);

  const starters = numbered.filter(p => p.category === 'starters').sort((a, b) => a.jersey - b.jersey);
  const bench    = numbered.filter(p => p.category === 'bench').sort((a, b) => a.jersey - b.jersey);
  const squad    = numbered.filter(p => p.category === 'squad');

  [
    buildSection('Starting XV', starters, team.color, team.captain),
    buildSection('Replacements', bench, team.color, team.captain),
    buildSection('Additional Squad', squad, team.color, team.captain),
  ].forEach(el => { if (el) container.appendChild(el); });

}
