const timeAgo = require("node-time-ago");
const html = require("html-template-tag");

module.exports = (pokemon) => html`<!DOCTYPE html>
  <html>
    <head>
      <title>Pokedex</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <div class="pokemon-list">
        <header><img src="/logo.png" />Pokedex</header>
        ${pokemon.map(
          (poke) => html` <div class="pokemon-item">
            <img src="${poke.image}" alt="${poke.name}" />
            <p>
              <span class="pokemon-position">${poke.id}. ▲</span>
              <a href="/pokemon/${poke.id}">${poke.name}</a>
              <small>(Trained by ${poke.trainer})</small>
            </p>
            <small class="pokemon-info">
              Type: ${poke.type} | Date Caught: ${timeAgo(poke.date)}
            </small>
          </div>`
        )}
      </div>
    </body>
  </html>`;
