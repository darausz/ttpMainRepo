import { useContext } from "react";
import TeamContext from "./TeamContext";

export default function useTeamContext () {
  return useContext(TeamContext);
}