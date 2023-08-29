const Team = require("./team");
const Player = require("./player");

Team.hasMany(Player);
Player.belongsTo(Team);

module.exports = { Team, Player };
