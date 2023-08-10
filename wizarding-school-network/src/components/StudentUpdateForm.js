import React, { useState } from "react";
import axios from "axios";
import useInfoContext from "./useInfoContext";

export default function StudentUpdateForm() {
  const { setStudents } = useInfoContext();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [magicalAbilityScore, setMagicalAbilityScore] = useState("");
  const [info, setInfo] = useState("update a student below");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const student = await axios.put("/api/students", {firstName, lastName, email, imageUrl, magicalAbilityScore});
      if (student) {
        setInfo("student successfully created");
        const refreshedStudents = await axios.get("/api/students");
        setStudents(refreshedStudents);
      }
      else {
        setInfo("error: invalid parameters");
      }
    }
    catch(error) {
      throw error;
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <p>{info}</p>
      <input name="first name" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
      <input name="last name" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
      <input name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}></input>
      <input name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <input name="magical ability score" value={magicalAbilityScore} onChange={(e) => setMagicalAbilityScore(e.target.value)}></input>
      {/* <input name="" value={} onChange={(e) => setAddress(e.target.value)}></input> */}
      <button type="submit">Update</button>
    </form>
  )
}