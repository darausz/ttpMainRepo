import React, { useState } from "react";
import axios from "axios";
import useInfoContext from "./useInfoContext";

export default function StudentRemovalButton ({studentId}) {
  const {students} = useInfoContext();

  async function handleClick(event) {
    event.preventDefault();
    await axios.delete(`/api/students/${studentId}`)
  }

  return(
    <button onClick={handleClick}>X</button>
  )
} 