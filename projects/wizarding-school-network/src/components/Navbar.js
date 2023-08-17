import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/students">  students  </Link>
      <span></span>
      <Link to="/wizarding-schools">  schools  </Link>
    </div>
  )
}