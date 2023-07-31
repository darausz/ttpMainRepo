import React, {useState, useEffect} from "react";
import axios from "axios";


const Main = () => {

  const [pokemon, setPokemon] = useState([]);
  const [pokemonId, setPokemonId] = useState("");
  const [trainer, setTrainer] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [showPokemon, setShowPokemon] = useState((true));
  const [text, setText] = useState("");

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

  async function fetchSinglePokemon(id) {
    const {data} = await axios.get(`/api/pokemon/${id}`);
    console.log("d", data);
    setPokemon(data);
    };
  async function handlePokemonClick() {
    setShowPokemon(true);
    setText(pokemon.map((singlePokemon) => {
      return(
        <div key={singlePokemon.id} className="pokemonClass">
          <div className="pokemonName" onClick={() => showIndividualPokemon(singlePokemon.id)}>{singlePokemon.name}</div>
          <p>Type: {singlePokemon.type}</p>
          <img src={singlePokemon.imageURL}></img>
          <p>Time Caught: {singlePokemon.date}</p>
          <p>Trained By: {singlePokemon.trainer}</p>
        </div>
      )
    }));
  }
  async function handleTrainerClick() {
    setShowPokemon(false);
    setText(trainer.map((person) => {
      return(
        <div key={person.id} className="pokemonClass">
          <div className="trainerName" onClick={() => showIndividualTrainer(person.id)}>{person.firstName} {person.lastName}</div>
          <p>Team: {person.team}</p>
          <img src={person.imageURL}></img>
        </div>
      )
    }));
  }
  function showIndividualPokemon(id) {
    // fetchSinglePokemon(id);
    // console.log(pokemon);
    setText(<div>
      <div key={pokemon[id-1].id} className="pokemonClass">
          <div className="pokemonName" onClick={() => showIndividualPokemon(pokemon[id-1].id)}>{pokemon[id-1].name}</div>
          <p>Type: {pokemon[id-1].type}</p>
          <img src={pokemon[id-1].imageURL}></img>
          <p>Time Caught: {pokemon[id-1].date}</p>
        </div> 
      {trainer.map((person) => {
        if (pokemon[id-1].trainer === person.firstName) {
          return(<div key={person.id} className="pokemonClass">
          <div className="trainerName" onClick={() => showIndividualTrainer(person.id)}>Trained By: {person.firstName} {person.lastName}</div>
          <p>Team: {person.team}</p>
          <img src={person.imageURL}></img>
        </div>);
        }
      })}</div>);
    setShowAll(false);
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
  
  return (
    <div id="main">
      <h1>Pokedex</h1>
      <button onClick={handlePokemonClick}>Pokemon</button>
      <button onClick={handleTrainerClick}>Trainers</button>
      <div>{text}</div>
    </div>
  );
};

export default Main;
