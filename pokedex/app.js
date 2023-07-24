const express = require("express");
const morgan = require("morgan");
const pokeBank = require("./pokeBank");
const pokeList = require("./views/pokeList");
const pokeDetails = require("./views/pokeDetails");
const Pokemon = require("./models/Pokemon");
const db = require("./db");

const app = express();


app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

(async () => {
  try {
    await db.sync();
    console.log("Models synced with database");
  } catch (error) {
    console.error(error);
  }
})();

app.get("/", (req, res) => {
  const pokemon = pokeBank.list();
  res.send(pokeList(pokemon));
});

app.get("/pokemon", async (req, res) => {
  const pokemon = await Pokemon.findAll();
  res.json(pokemon);
});

app.get("/pokemon/:id", async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id);
  if (pokemon) {
    res.json(pokemon);
  }
  else {
    res.status(404).send("pokemon not found");
  }
});

app.post("/pokemon", async (req, res) => {
  const newPokemon = await Pokemon.create(req.body);
  res.json(newPokemon);
});

app.put("/pokemon/:id", async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id);
  if (pokemon) {
    await pokemon.update(req.body);
    res.json(pokemon);
  }
  else {
    res.status(404).send("pokemon not found");
  }
});

app.delete("/pokemon/:id", async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id);
  if (pokemon) {
    await pokemon.destroy();
    res.status(204).send();
  }
  else {
    res.status(404).send("pokemon not found");
  }
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
