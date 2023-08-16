import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Ranks() {
  const [ranks, setRanks] = useState([]);

  useEffect(() => {
    async function getRanks() {
      const response = await axios.get("https://valorant-api.com/v1/competitivetiers");
      let responseData = (response.data.data[4].tiers.splice(3,));
      let tiers = [];
      tiers.push(responseData.splice(-1, 3));
      while (responseData.length > 0) {
        tiers.push(responseData.splice(-3, 3).reverse());
      }
      console.log(tiers)
      setRanks(tiers);
    }

    getRanks();
  }, [])

  function intToRomanNumerals(int) {
    if (int == 1) {
      return "I"
    }
    if (int == 2) {
      return "II"
    }
    if (int == 3) {
      return "III"
    }
    return " "
  }
  return (<>
    <h1>Competitive Tiers</h1>
    <div className="ranksContainer">
      {ranks.map((rank, index) => {
        return (
          <div className="divisionsContainer" id={`tierImg` + index}>
            <h2 className="tierName" id={`tierName` + index}><br/>{rank[0].divisionName}</h2> 
            <div className="tierContainer" id={`tierContainer` + index}>
              {rank.map((tier) => {
                return (
                  <div className="singleContainer">
                    <img className="tierImg" src={tier.largeIcon} alt="error" />
                    {(!isNaN(tier.tierName.substr(-1,))) ? (<p className="tierPadding">{intToRomanNumerals(tier.tierName.substr(-1,))}</p>) : (null)}
                  </div>
                )
              })}
              
            </div>
          </div>)
      })}
    </div>
    </>
  )
}