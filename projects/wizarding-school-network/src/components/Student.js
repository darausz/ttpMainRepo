import React, { useEffect } from "react";
import useInfoContext from "./useInfoContext";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Student() {
  const { setStudent, student, setSchool, school } = useInfoContext();
  const { studentId } = useParams();

  useEffect(() => {
    async function getSchool() {
      const { data: currentStudent } = await axios.get(`/api/students/${studentId}`);
      setStudent(currentStudent);
      if (currentStudent.wizardingSchoolId) {
        const { data } = await axios.get(`/api/wizarding-schools/${currentStudent.wizardingSchoolId}`)
        setSchool(data);
      }
    }
    getSchool();
  }, [])

  return (
    <div>
      <div className="smallInfo" key={student.id}>
        <div>
          <Link to={`/students/${student.id}`} onClick={() => { setStudent(student) }}>
            <p>{student.firstName} {student.lastName} </p>
          </Link>
        </div>
        <p>{student.email}</p>
        <img src={student.imageUrl} />
        <p className="score">Magical Ability Score: {student.magicalAbilityScore}</p>
      </div>
      <div className="smallInfo" key={school.name}>
        <div >
          <Link to={`/wizarding-schools/${school.id}`}>
            <p>{school.name} </p>
          </Link>
        </div>
        <p>{school.address}</p>
        <img src={school.imageUrl} />
        <p className="schoolDescription">{school.description}</p>
      </div>
      </div>
  )
}