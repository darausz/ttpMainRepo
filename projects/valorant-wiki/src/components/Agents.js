import React, { useState, useEffect, useRef } from "react";
import scrollLeft from "./functions/scrollLeft";
import scrollRight from "./functions/scrollRight";
import axios from "axios";

export default function Agents() {
  const [agents, setAgents] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    async function getAgents() {
      const response = await axios.get("https://valorant-api.com/v1/agents");
      const updatedAgents = response.data.data.map((agent) => {
        if (agent.isPlayableCharacter) {
          return(agent);
        }
        else {
          return(null);
        }
      }).filter(Boolean);
      setAgents(updatedAgents);
    }

    getAgents();
  }, [])

  return (
    <div className="agentsOuterContainer" ref={ref}>
      <div className="leftScroll" onClick={() => scrollLeft(ref, agents)}>
        &#60;
      </div>
      {agents.map((agent) => {
        return(
          <>
            <div className="agentsInnerContainer">
              <div className="agents">
                <img className="agentImg" alt="Agent Portrait Not Found" src={agent.fullPortrait} />
                <p className="agentName">{agent.displayName}</p>
                <p className="agentRole">{agent.role.displayName}</p>
                <p className="agentDescription"> {agent.description} </p>
              </div>
              <div className="abilityContainer">
                {agent.abilities.map((ability) => 
                ((ability.displayIcon) ? (<div className="agentsInfoContainer">
                      <img className="abilityIcon" src={ability.displayIcon} alt="Ability Icon Not Found" />
                      <span className="abilityDescription">
                        <p className="abilityName"> {ability.displayName}</p>
                        <p>{ability.description}</p>
                      </span>
                    </div>) : (<div className="agentsInfoContainer">
                      <div className="blankImg"></div>
                      <span className="abilityDescription">
                        <p className="abilityName"> {ability.displayName}</p>
                        <p>{ability.description}</p>
                      </span>
                    </div>))
                )}
              </div>
            </div>
            <hr/>
          </>
        )
      }
      ).filter(Boolean)}
      <div className="rightScroll" onClick={() => scrollRight(ref, agents)}>
        &#62;
      </div>
    </div>
  )
}