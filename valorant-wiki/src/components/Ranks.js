import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Ranks () {
  const [ranks, setRanks] = useState([]);

  useEffect(() => {
    async function getRanks() {
      const response = await axios.get("https://valorant-api.com/v1/competitivetiers");
      setRanks(response.data.data[4].tiers);
    }

    getRanks();
  }, [])

  return(
    ranks.map((rank) => {
      return(
        <div>
          <img className="icon" src={rank.smallIcon} alt="error"/> {rank.tierName}
        </div>
      )
    })
  )
}