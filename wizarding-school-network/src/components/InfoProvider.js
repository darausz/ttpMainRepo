import React, { useState, useEffect} from "react";
import InfoContext from "./InfoContext";
import axios from "axios";

export default function InfoProvider({children}) {
  const [student, setStudent] = useState({});
  const [students, setStudents] = useState([]);
  const [school, setSchool] = useState({});
  const [schools, setSchools] = useState([]);

  return(
    <InfoContext.Provider value={{
      student,
      setStudent,
      students, 
      setStudents,
      school, 
      setSchool,
      schools, 
      setSchools
    }}>
      {children}
    </InfoContext.Provider>
  )
}