import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./Main";
import Students from "./Students"

const Root = () => {
  return (
    <div className="navigation">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </div>
  );
};

export default Root;
