const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Team = sequelize.define(
    "Team",
    {
        // Model attributes are defined here
        teamName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        // Other model options go here
    }
);

module.exports = Team;
