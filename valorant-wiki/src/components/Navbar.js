import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="nav">
        <img src="./valorant-logo.png" className="navImg" alt="Logo Not Found"></img>
        <Link to="/" className="navItem">Home</Link>
        <Link to="/agents" className="navItem">Agents</Link>
        <Link to="/maps" className="navItem">Maps</Link>
        <Link to="/ranks" className="navItem">Ranks</Link>
        <Link to="/weapons" className="navItem">Weapons</Link>
      </div>
      <hr />
    </>
  )
}