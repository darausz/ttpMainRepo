import React, { useEffect } from "react";
import useInfoContext from "./useInfoContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

export default function School() {
  const { setSchool, school, setStudents, students, setStudent } = useInfoContext();
  const { schoolId } = useParams();

  useEffect(() => {
    async function updateStudents() {
      const { data } = await axios.get("/api/students");
      setStudents(data.map((student) => {
        if (student.wizardingSchoolId == schoolId) {
          return(student);
        }
      }).filter(Boolean));
      const { data: school} = await axios.get(`/api/wizarding-schools/${schoolId}`);
      setSchool(school);
    }
    updateStudents();
}, []);

return (
  <div>{school.name}{
    students.map((student) => {
      return (
        <div>
          <Link to={`/students/${student.id}`} onClick={() => {setStudent(student)}}>
              <span >
                {student.firstName}
              </span>
            </Link>
        </div>
      )
    })
  }</div>
)
}