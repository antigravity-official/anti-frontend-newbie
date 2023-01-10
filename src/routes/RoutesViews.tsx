import React from "react";
import { Routes, Route } from "react-router-dom";
import Currency from "../views/currency/Currency";

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Currency />} />
    </Routes>
  );
};

export default RoutesPage;
