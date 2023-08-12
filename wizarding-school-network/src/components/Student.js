import React, { useEffect } from "react";
import useInfoContext from "./useInfoContext";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Student() {
  const { student, setSchool, school } = useInfoContext();

  useEffect(() => {
    async function getSchool() {
      if (student.wizardingSchoolId) {
        const { data } = await axios.get(`/api/wizarding-schools/${student.wizardingSchoolId}`)
        setSchool(data);
      }
    }
    getSchool();
  }, [])
  
  return(
    <div>{student.firstName} 
    <div key={school.id}>
    <Link to={`/wizarding-schools/${school.id}`}>
      <span >
        {school.name}
      </span>
    </Link>
  </div></div>
  )
}