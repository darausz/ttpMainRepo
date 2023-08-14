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
        let updatedSchools = schools.map((current) => {
          if (current.id !== deletedSchool.id) {
            return current;
          }
        });
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