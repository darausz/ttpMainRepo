import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Agents() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    async function getAgents() {
      const response = await axios.get("https://valorant-api.com/v1/agents");
      setAgents(response.data.data);

    }
    getAgents();
  }, [])

  return (agents.map((agent) => {
    return (<>
    <p>{agent.displayName}</p>
      {agent.abilities.map((ability) => {
        return(<>{ability.displayName} <img src={ability.displayIcon} alt="error"/></>);
      })}
      </>)
  }))
}