import React, { useState } from "react";
import axios from "axios";
import useInfoContext from "./useInfoContext";

export default function SchoolUpdateForm() {
  const { setSchools } = useInfoContext();
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [info, setInfo] = useState("update a school below");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const school = await axios.put("/api/wizarding-schools", {name, imageUrl, address, description});
      if (school) {
        setInfo("school successfully created");
        const refreshedSchools = await axios.get("/api/wizarding-schools");
        setSchools(refreshedSchools);
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
      <input name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
      <input name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}></input>
      <input name="address" value={address} onChange={(e) => setAddress(e.target.value)}></input>
      <input name="description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
      {/* <input name="" value={} onChange={(e) => setAddress(e.target.value)}></input> */}
      <button type="submit">Update</button>
    </form>
  )
}