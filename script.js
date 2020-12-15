// Create and extract information about a sports team. Once created, manipulate these data structures as well as gain insights from them. For example, get the total number of games the team has played, or the average score of all of their games.

const team = {
  _players: [
    { firstName: "Pablo", lastName: "Sanchez", age: 22 },
    { firstName: "Maciek", lastName: "Giwin", age: 24 },
    { firstName: "Amender", lastName: "Chhina", age: 27 },
  ],
  _games: [
    { opponent: "Wisla Krakow", teamPoints: 1, opponentPoints: 3 },
    { opponent: "Cracovia", teamPoints: 1, opponentPoints: 7 },
    { opponent: "Rainbow Wariors", teamPoints: 33, opponentPoints: 12 },
  ],

  //getters

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    const player = { firstName, lastName, age };
    this._players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    const game = { opponent, teamPoints, opponentPoints };
    this._games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 55);
