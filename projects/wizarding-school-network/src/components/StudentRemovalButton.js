import React from "react";
import axios from "axios";
import useInfoContext from "./useInfoContext";

export default function StudentRemovalButton({ studentId }) {
  const { setStudents, students } = useInfoContext();

  async function handleClick(event) {
    event.preventDefault();
    try {
      const { data: deletedStudent } = await axios.delete(`/api/students/${studentId}`);
      if (deletedStudent) {
        const updatedStudents = students.map((current) => {
          if (current.id !== deletedStudent.id) {
            return current;
          }
        }).filter(Boolean);
        setStudents(updatedStudents);
      }
    }
    catch (error) {
      throw error;
    }
  }

  return (
    <button className="removeButton" onClick={handleClick}>X</button>
  )
} 