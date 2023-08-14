import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Maps() {
  const [maps, setMaps] = useState([])

  useEffect(() => {
    async function getMaps() {
      const response = await axios.get("https://valorant-api.com/v1/maps");
      setMaps(response.data.data);
    }

    getMaps();
  }, [])

  return(
    maps.map((current) => {
      return(
        <div>
          <img src={current.splash} alt="error"/>
        </div>
      )
    })
  )
}