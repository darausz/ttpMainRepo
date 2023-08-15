import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Maps() {
  const [maps, setMaps] = useState([]);
  const ref = useRef(null);
  useEffect(() => {
    async function getMaps() {
      const response = await axios.get("https://valorant-api.com/v1/maps");
      let copyOfData = response.data.data;
      const sortedResponse = [];
      copyOfData.forEach((item) => {
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

  function scrollLeft() {
    const maxScroll = (ref.current.scrollWidth + ref.current.clientWidth);
    const oneScroll = maxScroll / maps.length - ref.current.clientWidth / maps.length
    console.log(maxScroll, oneScroll)
    if (ref.current.scrollLeft - .5 * oneScroll < 0) {
      ref.current.scrollLeft = maxScroll - oneScroll;
    }
    else {
      ref.current.scrollLeft -= oneScroll - 0.3;
    }
  }

  function scrollRight() {
    const maxScroll = (ref.current.scrollWidth + ref.current.clientWidth);
    const oneScroll = Math.ceil(maxScroll / maps.length - (ref.current.clientWidth) / (maps.length))
    if (ref.current.scrollLeft + 2.1 * oneScroll > maxScroll) {
      ref.current.scrollLeft = 0;
    }
    else {
      ref.current.scrollLeft += oneScroll + 0.3;
      console.log(maxScroll, oneScroll, ref.current.scrollLeft)

    }
  }

  return (<div className="imgContainer" ref={ref} >
    <div className="leftScroll" onClick={scrollLeft}> &#60; </div>
    <div className="rightScroll" onClick={scrollRight}> &#62;</div>
    {maps.map((current) => {
      return (
        <div className="mapContainer" >
          <p className="mapDescription" >{current.displayName}</p>
          <img className="mapImg" src={current.splash} alt="error" />
        </div>
      )
    })}
  </div>
  )
  // return(
  //   <ScrollMenu 
  //     arrowLeft={<div className="leftScroll"> &#60; </div>}
  //     arrowRight={<p className="rightScroll"> &#62; </p>}
  //     data={maps.map((current, index) => (
  //             <img itemId={index} className="mapImg" src={current.splash} alt="error" />

  //         ))}
  //   />
  // )
}