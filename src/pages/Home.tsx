import React from "react";
import { EurModel } from "../types/EurModel";

interface HomeProp {
  viewModel: EurModel;
}
const Home = ({ viewModel }: HomeProp) => {
  return <div>Home</div>;
};

export default Home;
