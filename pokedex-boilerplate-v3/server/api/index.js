const router = require("express").Router();
const { db, trainer, pokemon } = require("../db");

// Connect your API routes here!
router.get("/pokemon", async (req, res, next) => {
    try {
        const pokemonList = await pokemon.findAll();
        res.send(pokemonList);
    }
    catch (error) {
        next(error);
    }
})

module.exports = router;
