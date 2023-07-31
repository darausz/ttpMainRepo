import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ShowAllPokemon ({ handleClick }) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const { data } = await axios.get("/api/pokemon");
      setPokemon(data);
    }
    getPokemon();

  }, [])

  return (
    <div>
      {pokemon.map((singlePokemon) => {
      return(
        <div key={singlePokemon.id} className="pokemonClass">
          <p className="pokemonName" onClick={() => {handleClick(singlePokemon.id)}}>{singlePokemon.name}</p>
          <p>Type: {singlePokemon.type}</p>
          <img src={singlePokemon.imageURL}></img>
          <p className="small">Time Caught: {singlePokemon.date}</p>
          <p>Trained By: {singlePokemon.trainer}</p>
        </div>
      )
    })}
    </div>
  )
}
