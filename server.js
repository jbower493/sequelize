const express = require("express");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const sequelize = require("./db/connection");
const { Team, Player } = require("./db/models");

const app = express();
const PORT = 4000;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.get("/player", async (req, res, next) => {
    const players = await Player.findAll({ raw: true });
    const teams = await Team.findAll({ raw: true });

    res.render("players", {
        players,
        teams,
    });
});

app.get("/player/:id", async (req, res, next) => {
    const player = await Player.findByPk(req.params.id);

    res.json({
        data: {
            player: player,
        },
    });
});

app.post("/player", async (req, res, next) => {
    console.info(req.body);
    // TODO: this is not adding the teamId to the players table
    await Player.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        teamId: req.body.teamId,
    });

    res.render("success");
});

app.get("/team", async (req, res, next) => {
    const teams = await Team.findAll({ raw: true });

    res.render("teams", {
        teams,
    });
});

app.post("/team", async (req, res, next) => {
    await Team.create({
        teamName: req.body.teamName,
    });

    res.render("success");
});

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening"));
});
