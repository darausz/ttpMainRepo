import React from "react";
import TeamData from "./TeamData";
import TeamProvider from "./TeamProvider";
import TeamSelection from "./TeamSelection";
import './App.css';

export default function App() {
  return (
    <TeamProvider >
      <TeamSelection />
      <TeamData />
    </TeamProvider>
  );
}

