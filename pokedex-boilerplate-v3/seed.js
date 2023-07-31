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
  await pokemon.create({
    id: 2,
    name: "Charizard",
    type: "Fire/Flying",
    trainer: "Ash",
    date: new Date(Date.now() - 90000000),
    imageURL:
      "https://www.giantbomb.com/a/uploads/square_medium/13/135472/1891763-006charizard.png",
  })
  // create some trainers
  await trainer.create({
    id:1,
    firstName: "Ash",
    lastName: "Ketchum",
    team: 1,
    imageURL: "https://static.giga.de/wp-content/uploads/2018/01/Ash_Pok%C3%A9mon-Quiz-rcm1200x1200u.png"
  })
  db.close();
  console.log(`
    Seeding successful! Pokedex is ready.
    `);
};

seed();