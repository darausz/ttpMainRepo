import React, {useState, useEffect} from "react";
import axios from "axios";

export default function ShowAllTrainers({ handleClick }) {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    async function getTrainers() {
      const { data } = await axios.get("/api/trainers");
      setTrainers(data);
    }
    getTrainers();

  }, [])

  return(
    <div>
    {trainers.map((person) => {
      return(
        <div key={person.id} className="pokemonClass">
          <p className="trainerName" onClick={() => handleClick(person.id)}>{person.firstName} {person.lastName}</p>
          <p>Team: {person.team}</p>
          <img src={person.imageURL}></img>
        </div>
      )
    })}
    </div>
  )
};