import './App.css';
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function AllCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      const response = await axios.get("https://swapi.dev/api/people");
      setCharacters(response.data.results);
    }
    fetchCharacters();
  }, []);

  return (
    <ul>
      <h1>All Characters</h1>
      {characters.map((char, index) => {
        return (
          <li key={char.name}>
            <h2>
              <Link to={`/characters/${index + 1}`}>{char.name}</Link>
            </h2>
            <p>
              <em>{char.height} cm, </em>
              <strong>{char.mass} kg</strong>
            </p>
          </li>
        )
      })}
    </ul>)
}

function SingleCharacter() {
  const [character, setCharacter] = useState([]);
  const navigate = useNavigate();

  const { characterId } = useParams();

  useEffect(() => {
    async function fetchCharacter() {
      const response = await axios.get(`https://swapi.dev/api/people/${characterId}`);
      setCharacter(response.data);
    }
    fetchCharacter();
  }, []);

  function handleClick() {
    navigate(-1);
  }

  return (
    <ul>
      <h1>Single Characters</h1>
      <li key={character.name}>
        <h2>{character.name}</h2>
        <p>
          <em>{character.height} cm, </em>
          <strong>{character.mass} kg</strong>
        </p>
        <button onClick={handleClick}>Go Back</button>
      </li>
    </ul>)
}

function LandingPage() {
  return "Landing Page";
}

function App() {
  return (
    <Routes>
      <Route path="/landingPage" element={<LandingPage />} />
      <Route path="/characters/:characterId" element={<SingleCharacter />} />
      <Route path="/characters" element={<AllCharacters />} />
    </Routes>
  );
}

export default App;
