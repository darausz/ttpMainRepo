import React, { useState } from "react";
import axios from "axios";
import useInfoContext from "./useInfoContext";

export default function SchoolRemovalButton({ schoolId }) {
  const { setSchools, schools } = useInfoContext();

  async function handleClick(event) {
    event.preventDefault();
    try {
      const deletedSchool = await axios.delete(`/api/wizarding-schools/${schoolId}`);
      if (deletedSchool) {
        let copyOfSchools = [...schools];
        let updatedSchools = schools.filter(current => current.id !== deletedSchool.id);
        setSchools(updatedSchools);
        // setSchools((school) => school.filter((current) => current.name !== deletedSchool.name));
      }
    }
    catch (error) {
      throw (error);
    }
  }

  return (
    <button onClick={handleClick}>X</button>
  )

}