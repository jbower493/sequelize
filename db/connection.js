const { Sequelize } = require("sequelize");
require("dotenv").config();

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
        port: 3306,
    }
);

module.exports = sequelize;
