import React, {useState, useEffect} from "react";
import axios from "axios";


const Main = () => {

  const [pokemon, setPokemon] = useState([]);
  const [trainer, setTrainer] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [showPokemon, setDisplay] = useState((true));
  const [text, setText] = useState("");

  // setPokemon({
  //   name: "Pikachu",
  //   type: "Electric",
  //   trainer: "Ash",
  //   date: new Date(Date.now() - 15000000),
  //   image:
  //     "https://www.giantbomb.com/a/uploads/scale_medium/0/6087/2437349-pikachu.png",
  // });
  async function fetchPokemon() {
    const {data} = await axios.get("/api/pokemon");
    console.log(data);
    setPokemon(data);
  }
  async function fetchSinglePokemon(id) {
    const pokemon = await axios.get("../server/api/pokemon/id");
    setPokemon(pokemon);
  }
  async function fetchTrainer() {
    const trainers = await axios.get("../server/api/trainers");
    setTrainer(trainers);
  }
  async function fetchSingleTrainer(id) {
    const trainers = await axios.get("../server/api/trainers/id");
    setTrainer(trainers);
  }
  async function handleClick(event) {
    console.log(event);
    if (showPokemon) {
      if (showAll) {
        fetchPokemon();
        setText(pokemon.map((singlePokemon) => {
          return (
            <>{singlePokemon.name}</>
          );
        }));
        console.log("showing pokemon", text);
      }
      else {
        // text = fetchSinglePokemon();
        console.log("showing single pokemon");
      }
    }
    else {
      if (showAll) {
        // text = fetchTrainer();
        console.log("showing trainers");
      }
      else {
        console.log("showing single trainer");
      }
    }
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
