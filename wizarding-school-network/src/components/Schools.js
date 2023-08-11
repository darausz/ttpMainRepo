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
    async function getSchools () {
      const { data } = await axios.get("/api/wizarding-schools");
      setSchools(data);
    }
    getSchools();
  }, [])

  return (
    <div>
      {schools.map((school) => {
        return (
          <div key={school.id}>
            <Link to={`/wizarding-schools/${school.id}`}>
              <span >
                {school.name}
              </span>
            </Link>
            <SchoolRemovalButton schoolId={school.id} />
          </div>
        )
      })}
      <SchoolInsertForm />
      <SchoolUpdateForm />
    </div>
  )
}