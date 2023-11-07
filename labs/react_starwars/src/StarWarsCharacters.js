import React, { useEffect, useState } from "react";
import Axios from "axios";

function StarWarsCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await Axios.get("https://swapi.dev/api/people/");
        setCharacters(response.data.results);
      }
      catch (error) {
        console.error("error fetching data", error);
      }
    }

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.name}>
            <h2>{character.name}</h2>
            <p>Home World: {character.homeworld}</p>
            <p>Species: {character.species[0]}</p>
            <p>Gender: {character.gender}</p>
            <p>Height: {character.height}</p>
            <p>Birth Year: {character.birth_year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StarWarsCharacters;