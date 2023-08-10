import React, { useState } from "react";
import axios from "axios";
import useInfoContext from "./useInfoContext";

export default function SchoolRemovalButton ({schoolId}) {
  const {schools} = useInfoContext();

  async function handleClick(event) {
    event.preventDefault();
    await axios.delete(`/api/wizarding-schools/${schoolId}`)
  }

  return(
    <button onClick={handleClick}>X</button>
  )
} 