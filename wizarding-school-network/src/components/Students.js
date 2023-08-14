import React, { useEffect } from "react";
import useInfoContext from "./useInfoContext";
import { Link } from "react-router-dom";
import axios from "axios";
import StudentInsertForm from "./StudentInsertForm";
import StudentUpdateForm from "./StudentUpdateForm";
import StudentRemovalButton from "./StudentRemovalButton";

export default function Students() {
  const { setStudents, students, setStudent } = useInfoContext();

  useEffect(() => {
    async function getStudents() {
      const { data } = await axios.get("/api/students");
      setStudents(data);
    }
    getStudents();
  }, [])

  return (
    <div className="container">
      <div className="subcontainer">
        <h1>Students</h1>
        {students.map((student) => {
          return (
            <div className="info" key={student.id}>
              <div className="removeDiv">
                <Link to={`/students/${student.id}`} onClick={() => { setStudent(student) }}>
                  <p>{student.firstName} {student.lastName} </p>
                </Link>
                <StudentRemovalButton studentId={student.id} />
              </div>
              <p>{student.email}</p>
              <img src={student.imageUrl} />
              <p className="schoolsDescription">Magical Ability Score: {student.magicalAbilityScore}</p>
            </div>
          )
        })}
      </div>
      <div>
        <p className="padding"></p>
        <StudentInsertForm />
        <StudentUpdateForm />
      </div>
    </div>
  )
}