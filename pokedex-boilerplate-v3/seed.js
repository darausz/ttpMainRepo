const { db, trainer, pokemon} = require("./server/db/index");

const seed = async () => {
  await db.sync({ force: true });

  // create some pokemon
  await pokemon.create({
    id: 1,
    name: "Pikachu",
    type: "Electric",
    trainer: "Ash",
    date: new Date(Date.now() - 15000000),
    imageURL:
      "https://www.giantbomb.com/a/uploads/scale_medium/0/6087/2437349-pikachu.png",
  });
  // create some trainers

  db.close();
  console.log(`
    Seeding successful! Pokedex is ready.
    `);
};

seed();