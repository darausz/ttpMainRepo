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
    console.log(singlePokemon);
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
    }
  }
  catch (error) {
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

router.put("/pokemon/:id", async (req, res, next) => {
    try {
        if (pokemon.findByPk(req.params.id)) {
            pokemon.update(
                {name: req.body.name}, 
                {type: req.body.type},
                {trainer: req.body.trainer},
                {date: req.body.date},
                {imageURL: req.body.imageURL},
                {where: {id: req.params.id}});
        }
    }
    catch (error) {
        next(error);
    }
})

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

router.post("/trainers/:id", async (req, res, next) => {
  try {
    if (trainer.findByPk(req.params.id)) {
      const newTrainer = await trainer.create(req.body);
      res.send(newTrainer);
    }
  }
  catch (error) {
    next(error);
  }
})

router.delete("/trainers/:id", async (req, res, next) => {
  try {
    if (trainer.findByPk(req.params.id)) {
      const toBeDeleted = await trainer.findByPk(req.params.id);
      await trainer.destroy(toBeDeleted);
    }
  }
  catch (error) {
    next(error);
  }
})

router.put("/trainers/:id", async (req, res, next) => {
  try {
      if (trainer.findByPk(req.params.id)) {
          trainer.update(
              {firstName: req.body.firstName}, 
              {lastName: req.body.lastNamee},
              {team: req.body.team},
              {imageURL: req.body.imageURL},
              {where: {id: req.params.id}});
      }
  }
  catch (error) {
      next(error);
  }
})

module.exports = router;
