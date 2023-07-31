import React, {useState, useEffect} from "react";
import axios from "axios";
import ShowAllPokemon from "./components/ShowAllPokemon.jsx";
import ShowAllTrainers from "./components/ShowAllTrainers.jsx";
import ShowSinglePokemon from "./components/ShowSinglePokemon.jsx";
import ShowSingleTrainer from "./components/ShowSingleTrainer.jsx";


const Main = () => {

  const [pokemon, setPokemon] = useState([]);
  const [pokemonId, setPokemonId] = useState(0);
  const [trainer, setTrainer] = useState([]);
  const [trainerId, setTrainerId] = useState(0);
  const [showAll, setShowAll] = useState(true);
  const [showPokemon, setShowPokemon] = useState((true));

  useEffect(() => {
    async function fetchPokemon() {
      const {data} = await axios.get("/api/pokemon");
      console.log("data:", data);
      setPokemon(data);
    }
    async function fetchTrainer() {
      const {data} = await axios.get("/api/trainers");
      console.log("trainers: ",data)
      setTrainer(data);
    }
    fetchPokemon();
    fetchTrainer();
  }, [])

  function handleClick(id) {
    if (showPokemon) {
      setPokemonId(id);
      setShowAll(false);
      trainer.map((person) => {
        if (person.firstName === pokemon.trainer) {
          setTrainerId(person.id);
        }
      })
    }
    else {
      setTrainerId(id);
      setShowAll(false);
    }
  }
  async function handlePokemonClick() {
    setShowPokemon(true);
    setShowAll(true);
  }
  async function handleTrainerClick() {
    setShowPokemon(false);
    setShowAll(true);
  }
  function showIndividualTrainer(id) {
    // fetchSingleTrainer(id);
    setText(<div>
      <div key={trainer[id-1].id} className="pokemonClass">
        <div className="trainerName" onClick={() => showIndividualTrainer(trainer[id-1].id)}>{trainer[id-1].firstName} {trainer[id-1].lastName}</div>
        <p>Team: {trainer[id-1].team}</p>
        <img src={trainer[id-1].imageURL}></img>
      </div>
      {pokemon.map((singlePokemon) => {
      if (trainer[id-1].firstName === singlePokemon.trainer) {
        console.log(singlePokemon.trainer);
        return(
          <div key={singlePokemon.id} className="pokemonClass">
            <div className="pokemonName" onClick={() => showIndividualPokemon(singlePokemon.id)}>{singlePokemon.name}</div>
            <p>Type: {singlePokemon.type}</p>
            <img src={singlePokemon.imageURL}></img>
            <p>Time Caught: {singlePokemon.date}</p>
          </div>
        )
      }
    })}</div>)
    // );
  }
  function handleGoBackClick(event) {
    event.preventDefault();
    setShowAll(true);
  }
  function logic ()  {
    if (showPokemon) {
      if (showAll) {
        return (
        <ShowAllPokemon 
          handleClick={handleClick} 
          setShowPokemon={setShowPokemon}
        />);
      }
      else {
        return (
        <ShowSinglePokemon 
          pokemonId={pokemonId}
          setShowAll={setShowAll} 
          handleClick={handleClick}
          handleGoBackClick={handleGoBackClick}
          setShowPokemon={setShowPokemon}
        />);
      }
    }
    else {
      if (showAll) {
        return (
        <ShowAllTrainers 
          handleClick={handleClick} 
          setShowPokemon={setShowPokemon}
        />)
      }
      else {
        return (
        <ShowSingleTrainer 
          trainerId={trainerId} 
          setShowAll={setShowAll} 
          handleClick={handleClick}
          handleGoBackClick={handleGoBackClick}
          setShowPokemon={setShowPokemon}
        />);
      }
    }
  }
  return (
    <div id="main">
      <h1>Pokedex</h1>
      <div className="buttons">
        <button onClick={handlePokemonClick}>Pokemon</button>
        <button onClick={handleTrainerClick}>Trainers</button>
      </div>
      <div>
        {logic()}
      </div>
    </div>
  );

};

export default Main;
