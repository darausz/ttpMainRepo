import React, {useState, useEffect} from "react";
import axios from "axios";

export default function ShowSingleTrainer({ trainerId, setShowAll, handleClick, setShowPokemon, handleGoBackClick}) {
  const [pokemon, setPokemon] = useState([]);
  const [singleTrainer, setSingleTrainer] = useState({});

  useEffect(() => {
    async function getData (){
      const { data } = (await axios.get(`/api/trainers/${trainerId}`));
      const response = await axios.get("/api/pokemon");
      setSingleTrainer(data);
      setPokemon(response.data);
    }

    getData();
    setShowAll(false);
  }, [trainerId])

  return(<div>
    <div key={singleTrainer.id} className="pokemonClass">
      <div className="trainerName" >{singleTrainer.firstName} {singleTrainer.lastName}</div>
      <p>Team: {singleTrainer.team}</p>
      <img src={singleTrainer.imageURL}></img>
    </div>
    <div className="pokemon">{pokemon.map((singlePokemon) => {
    if (singleTrainer.firstName === singlePokemon.trainer) {
      console.log(singlePokemon.trainer);
      return(
        <div key={singlePokemon.id} className="pokemonClass">
          <div>{singlePokemon.name}</div>
          <p>Type: {singlePokemon.type}</p>
          <img src={singlePokemon.imageURL}></img>
          <p className="small">Time Caught: {singlePokemon.date}</p>
        </div>
      )
    }
    })}</div>
    <button onClick={handleGoBackClick}>Go Back</button>
    </div>)
};