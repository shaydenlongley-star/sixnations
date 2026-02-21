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
      { name: 'Seb Atkinson', position: 'Centre' },
      { name: 'Tommy Freeman', position: 'Wing' },
      { name: 'Immanuel Feyi-Waboso', position: 'Wing' },
      { name: 'Henry Arundell', position: 'Wing' },
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
      { name: 'Kalvin Gourgues', position: 'Centre' },
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
      { name: 'David Odiase', position: 'Flanker' },
      { name: 'Manuel Zuliani', position: 'Flanker' },
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

const positionOrder = [
  'Loosehead Prop', 'Tighthead Prop', 'Prop',
  'Hooker',
  'Lock',
  'Flanker', 'Number 8',
  'Scrum-half',
  'Fly-half',
  'Centre',
  'Wing',
  'Fullback'
];

const positionGroups = {
  'Loosehead Prop': 'Props',
  'Tighthead Prop': 'Props',
  'Prop': 'Props',
  'Hooker': 'Hookers',
  'Lock': 'Locks',
  'Flanker': 'Back Row',
  'Number 8': 'Back Row',
  'Scrum-half': 'Scrum-halves',
  'Fly-half': 'Fly-halves',
  'Centre': 'Centres',
  'Wing': 'Wings',
  'Fullback': 'Fullbacks'
};

const groupOrder = ['Props', 'Hookers', 'Locks', 'Back Row', 'Scrum-halves', 'Fly-halves', 'Centres', 'Wings', 'Fullbacks'];

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

  const container = document.getElementById('squad-container');

  const grouped = {};
  team.players.forEach(player => {
    const group = positionGroups[player.position] || 'Others';
    if (!grouped[group]) grouped[group] = [];
    grouped[group].push(player);
  });

  groupOrder.forEach(groupName => {
    if (!grouped[groupName]) return;

    const section = document.createElement('div');
    section.className = 'position-group';

    section.innerHTML = `<h3>${groupName}</h3>`;

    const grid = document.createElement('div');
    grid.className = 'players-grid';

    grouped[groupName].forEach(player => {
      const isCaptain = player.name === team.captain;
      const card = document.createElement('div');
      card.className = 'player-card' + (isCaptain ? ' captain' : '');
      card.innerHTML = `
        <div class="player-name">${player.name}</div>
        <div class="player-position">${player.position}</div>
        ${isCaptain ? '<span class="captain-badge">Captain</span>' : ''}
      `;
      if (isCaptain) {
        card.style.borderColor = team.color + '88';
      }
      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  });
}
