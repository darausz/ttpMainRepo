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

  return (
    <div className="agentsOuterContainer">
      {agents.map((agent) => {
        return agent.isPlayableCharacter ? (
          <>
            <div className="agentsInnerContainer">
              <div className="agents">
                <img className="agentImg" alt="Agent Portrait Not Found" src={agent.fullPortrait} />
                <p className="agentName">{agent.displayName}</p>
                <p className="agentRole">{agent.role.displayName}</p>
                <p className="agentDescription"> {agent.description} </p>
              </div>
              <div className="abilityContainer">
                {agent.abilities.map((ability) => {
                  return ability.displayIcon ?
                    (<div className="agentsInfoContainer">
                      <img className="abilityIcon" src={ability.displayIcon} alt="Ability Icon Not Found" />
                      <span>
                        <p className="abilityDescription"> {ability.displayName}</p>
                        <p>{ability.description}</p>
                      </span>
                    </div>)
                    :
                    (<div className="agentsInfoContainer">
                      <div className="blankImg"></div>
                      <p>
                        <p className="abilityDescription"> {ability.displayName}</p>
                        <p>{ability.description}</p>
                      </p>
                    </div>)
                })}
              </div>
            </div>
            <hr/>
          </>
        ) : (<></>)
      }
      ).filter(Boolean)}
    </div>
  )
}