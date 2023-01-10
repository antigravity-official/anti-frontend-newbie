import React from "react";
import { EurModel } from "../types/EurModel";

interface HomeProp {
  viewModel: EurModel;
}
const Home = ({ viewModel }: HomeProp) => {
  const marketPriceGroup = viewModel.getBuyingAndSellingPriceGroup();

  return (
    <div>
      <h2>환율</h2>
      <p>1유로 기준</p>
      <div>
        {viewModel.getBasePrice()}
        {viewModel.getIconForOpeningPriceComparison()}
        {viewModel.getChangePrice()}원{viewModel.getChangeRate()}%
      </div>
      <div>
        {marketPriceGroup.map((price: any) => (
          <div key={price.name}>
            {price.name} : {price.price}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
