import React, { useState } from "react";
import axios from "axios";
import useInfoContext from "./useInfoContext";

export default function SchoolInsertForm() {
  const { setSchools } = useInfoContext();
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [info, setInfo] = useState("Create a New School");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const {data: school} = await axios.post("/api/wizarding-schools", {name, imageUrl, address, description});
      if (school) {
        setInfo("School Successfully Created");
        setSchools((prevSchools) => [...prevSchools, school]);
      }
      else {
        setInfo("Error: Invalid Parameters");
      }
    }
    catch(error) {
      throw error;
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <p>{info}</p>
      <hr></hr>
      <p>Name: </p><input name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
      <p>Image URL: </p><input name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}></input>
      <p>Address: </p><input name="address" value={address} onChange={(e) => setAddress(e.target.value)}></input>
      <p>Description: </p><input name="description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
      <p></p><button type="submit">Add</button>
    </form>
  )
}