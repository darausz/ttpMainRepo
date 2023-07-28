import React, {useState, useEffect} from "react";
import Axios from "axios";


const Main = () => {

  const [pokemon, setPokemon] = useState([]);
  const [trainer, setTrainer] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [showPokemon, setDisplay] = useState((true))

  useEffect (() => {
    // setPokemon({
    //   name: "Pikachu",
    //   type: "Electric",
    //   trainer: "Ash",
    //   date: new Date(Date.now() - 15000000),
    //   image:
    //     "https://www.giantbomb.com/a/uploads/scale_medium/0/6087/2437349-pikachu.png",
    // });
    async function fetchPokemon() {
      const pokemon = await axios.get("../server/api/pokemon");
      setPokemon(pokemon);
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
    }
  }, [])
  

  return (
    <div id="main">
      <h1>Pokedex</h1>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default Main;
