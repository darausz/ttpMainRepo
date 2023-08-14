import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useInfoContext from "./useInfoContext";
import SchoolInsertForm from "./SchoolInsertForm";
import SchoolUpdateForm from "./SchoolUpdateForm";
import SchoolRemovalButton from "./SchoolRemovalButton";
import axios from "axios";

export default function Schools() {
  const { schools, setSchools } = useInfoContext();

  useEffect(() => {
    async function getSchools() {
      const { data } = await axios.get("/api/wizarding-schools");
      setSchools(data);
    }
    getSchools();
  }, [])

  return (
    <div className="container">
      <div className="subcontainer">
        <h1>Wizarding Schools</h1>
        {schools.map((school) => {
          return (
            <div className="info" key={school.id}>
              <div className="removeDiv">
                <Link to={`/wizarding-schools/${school.id}`}>
                  <p>{school.name} </p>
                </Link>
                <SchoolRemovalButton schoolId={school.id} />
              </div>
              <p>{school.address}</p>
              <img src={school.imageUrl} />
              <p className="schoolsDescription">{school.description}</p>
            </div>
          )
        })}
      </div>
      <div>
        <p className="padding"></p>
        <SchoolInsertForm />
        <SchoolUpdateForm />
      </div>
    </div>
  )
}