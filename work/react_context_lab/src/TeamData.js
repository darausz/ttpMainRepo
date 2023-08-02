import React from "react";
import useTeamContext from "./useTeamContext";

export default function TeamData() {
  const { team } = useTeamContext();

  return(
    <div>
      {team ? `data for ${team}` : "please select a team"}
    </div>
  )
}