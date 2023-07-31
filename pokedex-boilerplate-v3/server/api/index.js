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

router.get("/pokemon/:id", async (req, res, next) => {
    try {
        const singlePokemon = await pokemon.findByPk(req.params.id);
        res.send(singlePokemon);
    }
    catch (error) {
        next(error);
    }
})

router.post("/pokemon/:id", async (req, res, next) => {
    try {
        if (pokemon.findByPk(req.params.id)) {
            const newPokemon = await pokemon.create(req.body);
            res.send(newPokemon);
    }}
    catch(error) {
        next(error);
    }
})

router.delete("/pokemon/:id", async (req, res, next) => {
    try {
        if (pokemon.findByPk(req.params.id)) {
            const toBeDeleted = await pokemon.findByPk(req.params.id);
            await pokemon.destroy(toBeDeleted);
        }
    }
    catch (error) {
        next(error);
    }
})

// router.update("/pokemon/:id", async (req, res, next) => {
//     try {
//         if (pokemon.findByPk(req.params.id)) {
//             pokemon.update(
//                 {name: req.body.name}, 
//                 {type: req.body.type},
//                 {trainer: req.body.trainer},
//                 {date: req.body.date},
//                 {imageURL: req.body.imageURL},
//                 {where: {id: req.params.id}});
//         }
//     }
//     catch (error) {
//         next(error);
//     }
// })

router.get("/trainers/", async (req, res, next) => {
    try {
        const trainerList = await trainer.findAll();
        res.send(trainerList);
    }
    catch (error) {
        next(error);
    }
})

router.get("/trainers/:id", async (req, res, next) => {
    try {
        const singleTrainer = await trainer.findByPk(req.params.id);
        res.send(singleTrainer);
    }
    catch (error) {
        next(error);
    }
})

module.exports = router;
