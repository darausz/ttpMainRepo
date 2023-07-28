import React, {useState, useEffect} from "react";


const Main = () => {

  const [pokemon, setPokemon] = useState([]);

  useEffect (() => {
    setPokemon({
      name: "Pikachu",
      type: "Electric",
      trainer: "Ash",
      date: new Date(Date.now() - 15000000),
      image:
        "https://www.giantbomb.com/a/uploads/scale_medium/0/6087/2437349-pikachu.png",
    });
  }, [])
  

  return (
    <div id="main">
      <h1>Pokedex</h1>
      {pokemon.data}
    </div>
  );
};

export default Main;
