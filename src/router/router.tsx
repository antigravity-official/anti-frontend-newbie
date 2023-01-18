import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "../component/home/home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
