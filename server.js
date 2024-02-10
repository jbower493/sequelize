const mate = 'bob'
const hbs = exphbs.create({});

const sequelize = require("./db/connection");
const Player = require("./db/models/player");

const app = express();
const PORT = 4050;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/player", async (req, res, next) => {
    const players = await Player.findAll({ raw: true });
    console.log(playeers);
    res.render("players", {
        players,
    });
});

app.get("/player/:id", async (req, res, next) => {
    const playerero = await Player.findByPk(req.params.id);

    res.json({
        data: {
            player: playerero,
        },
    });
});

app.post("/player", async (req, res, next) => {
    await Player.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    });

    res.render("suss");
});

console.log('mate');
console.log('what');

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log("Now listening"));
});
