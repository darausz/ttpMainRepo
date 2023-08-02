import React, { useState, useEffect } from "react";
import TeamContext from "./TeamContext";

export default function TeamProvider ({ children }) {
  const [team, setTeam] = useState("");
  const [allTeams, setAllTeams] = useState([]);

  useEffect(() => {
    async function fetchTeams() {
      const response = ["team 1", "team 2", "team 3"];
      setAllTeams(response);
    };

    fetchTeams();
  }, []);

  return(
    <TeamContext.Provider value={{team, setTeam, allTeams, setAllTeams}}>
      {children}
    </TeamContext.Provider>
  );
} 