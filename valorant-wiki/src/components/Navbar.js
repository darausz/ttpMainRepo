import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return(
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/agents">Agents</Link>
      <Link to="/maps">Maps</Link>
      <Link to="/ranks">Ranks</Link>
      <Link to="/weapons">Weapons</Link>
    </div>
  )
}