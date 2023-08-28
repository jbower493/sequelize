const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Player = sequelize.define(
    "Player",
    {
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            // allowNull defaults to true
            get() {
                const rawValue = this.getDataValue("lastName");
                return rawValue ? rawValue.toUpperCase() : null;
            },
        },
    },
    {
        // Other model options go here
    }
);

module.exports = Player;
