import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
