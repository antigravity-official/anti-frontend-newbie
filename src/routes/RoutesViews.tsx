import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
};

export default RoutesPage;
