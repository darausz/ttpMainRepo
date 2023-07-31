import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ShowSinglePokemmon({ pokemonId, setShowAll, handleClick, handleGoBackClick, setShowPokemon}) {
  const [singlePokemon, setSinglePokemon] = useState({});
  const [trainer, setTrainer] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`/api/pokemon/${pokemonId}`);
      const response = await axios.get(`/api/trainers`);
      setSinglePokemon(data);
      setTrainer(response.data);
    }
    fetchData();
    setShowAll(false);
  }, [pokemonId]);

  return (<div>
    <div key={singlePokemon.id} className="pokemonClass">
      <div className="pokemonName" >{singlePokemon.name}</div>
      <p>Type: {singlePokemon.type}</p>
      <img src={singlePokemon.imageURL}></img>
      <p className="small">Time Caught: {singlePokemon.date}</p>
    </div>
    {trainer.map((person) =>{
      if (person.firstName === singlePokemon.trainer) {
      return(
      <div key={person.id} className="pokemonClass">
        <div>Trained By: {person.firstName} {person.lastName}</div>
        <p>Team: {person.team}</p>
        <img src={person.imageURL}></img>
      </div>)}})}
    <button onClick={handleGoBackClick}>Go Back</button>
  </div>);
};
