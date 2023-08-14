import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Weapons() {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    async function getWeapons() {
      const response = await axios.get("https://valorant-api.com/v1/weapons");
      setWeapons(response.data.data);
    }

    getWeapons();
  }, [])

  return(
    <div>
      {weapons.map((weapon) => {
        return(
          <div>
            {weapon.displayName}
            <img src={weapon.displayIcon} alt="error" />
          </div>
        )
      })}
    </div>
  )
}