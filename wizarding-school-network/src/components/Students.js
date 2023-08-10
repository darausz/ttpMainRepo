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
    <div>{
      students.map((student) => {
        return (
          <div>
            <Link to={`/students/${student.id}`} onClick={() => { setStudent(student) }}>
              <span >
                {student.firstName}
              </span>
            </Link>
            <StudentRemovalButton studentId={student.id}/>
          </div>
        )
      })
    }
      <StudentInsertForm />
      <StudentUpdateForm />
    </div>
  )
}