import React from "react";
import { Link } from "react-router-dom";


export default function Navbar () {
  return(
    <nav>
      <Link to="/">Home</Link>
      <Link to="/user/1">User 1</Link>
      <Link to="/user/2">User 2</Link>
      <Link to="/user/3">User 3</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}