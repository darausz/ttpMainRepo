import React from "react";
import axios from "axios";
import useInfoContext from "./useInfoContext";

export default function SchoolRemovalButton({ schoolId }) {
  const { setSchools, schools } = useInfoContext();

  async function handleClick(event) {
    event.preventDefault();
    try {
      const {data: deletedSchool} = await axios.delete(`/api/wizarding-schools/${schoolId}`);
      if (deletedSchool) {
        const updatedSchools = schools.map(current => current.id !== schoolId );
        setSchools(updatedSchools);
      }
    }
    catch (error) {
      throw (error);
    }
  }

  return (
    <button className="removeButton" onClick={handleClick}>X</button>
  )

}