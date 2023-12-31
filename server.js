const express = require("express");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const sequelize = require("./db/connection");
const Player = require("./db/models/player");

const app = express();
const PORT = 4000;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/player", async (req, res, next) => {
    const players = await Player.findAll({ raw: true });
    console.log(players);
    res.render("players", {
        players,
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
    await Player.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    });

    res.render("success");
});

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log("Now listening"));
});
