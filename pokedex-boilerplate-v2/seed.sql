-- Create trainers
INSERT INTO "Trainers" ("name") VALUES ('Ash');
INSERT INTO "Trainers" ("name") VALUES ('Misty');
INSERT INTO "Trainers" ("name") VALUES ('Brock');

-- Create Pokemon
INSERT INTO "Pokemon" ("name", "type", "trainer", "date", "image", "TrainerId") VALUES ('Pikachu', 'Electric', 'Ash', '2023-07-19', 'https://www.giantbomb.com/a/uploads/scale_medium/0/6087/2437349-pikachu.png', 1);
INSERT INTO "Pokemon" ("name", "type", "trainer", "date", "image", "TrainerId") VALUES ('Charizard', 'Fire/Flying', 'Ash', '2023-07-19', 'https://www.giantbomb.com/a/uploads/square_medium/13/135472/1891763-006charizard.png', 1);
INSERT INTO "Pokemon" ("name", "type", "trainer", "date", "image", "TrainerId") VALUES ('Bulbasaur', 'Grass/Poison', 'Ash', '2023-07-19', 'https://archives.bulbagarden.net/media/upload/f/fb/0001Bulbasaur.png', 1);
INSERT INTO "Pokemon" ("name", "type", "trainer", "date", "image", "TrainerId") VALUES ('Squirtle', 'Water', 'Ash', '2023-07-19', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png', 1);
INSERT INTO "Pokemon" ("name", "type", "trainer", "date", "image", "TrainerId") VALUES ('Jigglypuff', 'Normal/Fairy', 'Misty', '2023-07-19', 'https://archives.bulbagarden.net/media/upload/3/3a/0039Jigglypuff.png', 2);
INSERT INTO "Pokemon" ("name", "type", "trainer", "date", "image", "TrainerId") VALUES ('Gengar', 'Ghost/Poison', 'Brock', '2023-07-19', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png', 3);
