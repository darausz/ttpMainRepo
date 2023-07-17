const express = require("express");
const morgan = require("morgan");
const timeAgo = require("node-time-ago");
const pokeBank = require("./pokeBank");

const app = express();

app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.static('public'));

//create html website
let htmlStart = `<!DOCTYPE html><html><head><title>My Pokedex</title><link rel="stylesheet" href="/style.css"/></head><body><div class="pokemon-list"><header><img src="/logo.png" />Pokedex</header>`;
let htmlEnd = `</div></body></html>`;
let addInfo = (pokemon) => {
  let info = `<div class="pokemon-item">`;
  info += `<img class="pokemon-img" src=${pokemon.image} />`;
  info += `<p>
  <span class="pokemon-position">${pokemon.id}. ▲</span>
  <a href="/pokemon/${pokemon.id}">${pokemon.name}&nbsp</a>
  <small>(Trained by ${pokemon.trainer})</small></p>`;
  info += `<small class="pokemon-info">Type: ${pokemon.type} | Date Caught: ${timeAgo(pokemon.date)}</small>`;
  info += `</div>`;
  return info;
}

app.get("/", (req, res) => {
  //res.send("welcome to your pokedex");
  let pokemonList = pokeBank.list();
  let site = htmlStart;
  pokemonList.map((pokemon) => {
    site += addInfo(pokemon);
  })
  site += htmlEnd;
  res.send(site);
});


app.get("/pokemon/:id", (req, res) => {
  let id = req.params.id;
  let pokemon = pokeBank.find(id);  
  if (!pokemon.id) {
    res.send(htmlStart +`<div class="error">Error 404: Page Not Found<div>` + htmlEnd);
  }
  else {
    res.send(htmlStart + `<div class="space"></div>` + addInfo(pokemon) + htmlEnd);
  }
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
