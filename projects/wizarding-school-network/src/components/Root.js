import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./Main";
import Students from "./Students";
import Student from "./Student";
import School from "./School";
import Schools from "./Schools";
import Navbar from "./Navbar";
import InfoProvider from "./InfoProvider";

const Root = () => {

  return (
    <div className="navigation">
      <InfoProvider >
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:studentId" element={<Student />} />
        <Route path="/wizarding-schools" element={<Schools />} />
        <Route path="/wizarding-schools/:schoolId" element={<School />} />
      </Routes>
      </InfoProvider>
    </div>
  );
};

export default Root;
