import React, { useState} from "react";
import axios from "axios";

export default function ControlledForm () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await axios.post("http://127.0.0.1:3000/users", {
      id,
      name,
      email,
    })
    console.log(response.data);
  }

  async function handleUpdate(event) {
    event.preventDefault();
    const response = await axios.put(`http://127.0.0.1:3000/users/${id}`, {
      name,
      email,
    })
    console.log(response.data)
  }

  async function handleDelete(event) {
    event.preventDefault();
    const response = await axios.delete(`http://127.0.0.1:3000/users/${id}`);
    console.log(response.data);
  }

  return(
    <form>
      <input value={id} onChange={(e) => {setId(e.target.value)}}></input> 
      <input value={name} onChange={(e) => {setName(e.target.value)}}></input>
      <input value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </form>
  )
}
