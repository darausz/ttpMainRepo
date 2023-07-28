const db = require("./db.js");
const trainer = require("../models/trainer.js");
const pokemon = require("../models/pokemon.js");

// place your associations here!
trainer.hasMany(pokemon);
pokemon.belongsTo(trainer);

// export your models below
module.exports = {db, trainer, pokemon};
