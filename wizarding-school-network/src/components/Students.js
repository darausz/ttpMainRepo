import React from "react";
import useInfoContext from "./useInfoContext";

export default function Students() {
  const {students} = useInfoContext();

  return(
    <div>stuff in front
      {students.map(() => {
        return(
          <div key={student.id}>
            
          </div>
        )
      })}
    </div>
  )
}