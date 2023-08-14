import React from "react";
import axios from "axios";
import useInfoContext from "./useInfoContext";

export default function StudentRemovalButton({ studentId }) {
  const { setStudents, students } = useInfoContext();

  async function handleClick(event) {
    event.preventDefault();
    try {
      const {data:unenrolledStudent} = await axios.get(`/api/students/${studentId}`);
      if (unenrolledStudent) {
        const updatedStudent = await axios.put(`/api/students/${studentId}`, {wizardingSchoolId: null})
        console.log(updatedStudent);
        let updatedStudents = students.filter(current => current.id !== updatedStudent.id);
        setStudents(updatedStudents);
      }
    }
    catch (error) {
      throw error;
    }
  }

  return (
    <button onClick={handleClick}>unenroll</button>
  )
} 