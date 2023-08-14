import React, { useState } from "react";
import axios from "axios";
import useInfoContext from "./useInfoContext";

export default function StudentUpdateForm() {
  const { setStudents, students } = useInfoContext();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [magicalAbilityScore, setMagicalAbilityScore] = useState("");
  const [info, setInfo] = useState("Update a Student");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const {data:student} = await axios.put("/api/students", {firstName, lastName, email, imageUrl, magicalAbilityScore});
      if (student) {
        setInfo("Student Successfully Updated");
        const updatedStudents = students.map((current) => {
          if (current.id !== student.id) {
            return current;
          }
          else {
            return student;
          }
        })
        setStudents(updatedStudents);
      }
      else {
        setInfo("Error: Invalid Parameters");
      }
    }
    catch (error) {
      throw error;
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <p>{info}</p>
      <hr></hr>
      <p>First Name: </p><input name="first name" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
      <p>Last Name: </p><input name="last name" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
      <p>Image URL: </p><input name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}></input>
      <p>Email: </p><input name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <p>Magical Ability Score: </p><input name="magical ability score" value={magicalAbilityScore} onChange={(e) => setMagicalAbilityScore(e.target.value)}></input>
      <p></p><button type="submit">Update</button>
    </form>
  )
}