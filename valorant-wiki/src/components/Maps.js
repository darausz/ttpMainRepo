import React, { useState, useEffect, useRef } from "react";
import scrollLeft from "./functions/scrollLeft";
import scrollRight from "./functions/scrollRight";
import axios from "axios";

export default function Maps() {
  const [maps, setMaps] = useState([]);
  const ref = useRef(null);


  useEffect(() => {
    async function getMaps() {
      const response = await axios.get("https://valorant-api.com/v1/maps");
      const sortedResponse = [];
      response.data.data.forEach((item) => {
        if (item.coordinates !== null && item.displayName !== "The Range") {
          sortedResponse.unshift(item);
        }
        else {
          sortedResponse.push(item);
        }
      })
      setMaps(sortedResponse);
    }

    getMaps();
  }, [])

  return (
    <div className="imgContainer" ref={ref}>
      <div className="leftScroll" onClick={() => scrollLeft(ref, maps)}>
        &#60;
      </div>
      {maps.map((current) => (
        <div className="mapContainer" key={current.displayName}>
          <div className="mapImageWrapper">
            <img className="mapImg" src={current.splash} alt="error" />
            <p className="mapDescription">{current.displayName}</p>
          </div>
        </div>
      ))}
      <div className="rightScroll" onClick={() => scrollRight(ref, maps)}>
        &#62;
      </div>
      </div>
  );
}