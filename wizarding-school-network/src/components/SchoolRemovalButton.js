import React, { useState } from "react";
import axios from "axios";
import useInfoContext from "./useInfoContext";

export default function SchoolRemovalButton ({schoolId}) {
  const { setSchools, schools} = useInfoContext();

  async function handleClick(event) {
    event.preventDefault();
    const deletedSchool = await axios.delete(`/api/wizarding-schools/${schoolId}`);
    setSchools(deletedSchool);
    let updatedSchools = [...schools];
    // let splicedSchools = updatedSchools.splice(deletedSchool.id-1);
    // setSchools(splicedSchools);
    // setSchools((school) => school.filter((current) => current.name !== deletedSchool.name));
  }

  return(
    <button onClick={handleClick}>X</button>
  )
} 