const timeAgo = require("node-time-ago");
const html = require("html-template-tag");

module.exports = (poke) => html`<!DOCTYPE html>
  <html>
    <head>
      <title>Pokedex</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <div class="pokemon-list">
        <header><img src="/logo.png" />Pokedex</header>
        <div class="pokemon-item">
          <img src="${poke.image}" alt="${poke.name}" />
          <p>${poke.name} <small>(Trained by ${poke.trainer})</small></p>
          <p>Type: ${poke.type}</p>
          <p>Date Caught: ${timeAgo(poke.date)}</p>
        </div>
      </div>
    </body>
  </html>`;
