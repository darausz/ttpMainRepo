import React, { useEffect } from "react";
import useInfoContext from "./useInfoContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import StudentUnenrollButton from "./StudentUnenrollButton"
import axios from "axios";

export default function School() {
  const { setSchool, school, setStudents, students, setStudent } = useInfoContext();
  const { schoolId } = useParams();

  useEffect(() => {
    async function updateStudents() {
      const { data } = await axios.get("/api/students");
      setStudents(data.map((student) => {
        if (student.wizardingSchoolId == schoolId) {
          return (student);
        }
      }).filter(Boolean));
      const { data: school } = await axios.get(`/api/wizarding-schools/${schoolId}`);
      setSchool(school);
    }
    updateStudents();
  }, []);

  return (
    <div className="smallInfoContainer">
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
      <div className="smallInfoContainer">
      {students.map((student) => {
        return (
          <div className="smallInfo" key={student.id}>
            <div>
              <Link to={`/students/${student.id}`} onClick={() => { setStudent(student) }}>
                <p>{student.firstName} {student.lastName} </p>
              </Link>
            </div>
            <p>{student.email}</p>
            <img src={student.imageUrl} />
            <p className="score">Magical Ability Score: {student.magicalAbilityScore}</p>
            <StudentUnenrollButton studentId={student.id}/>
          </div>
        )
      })
      }
      </div>
    </div>
  )
}