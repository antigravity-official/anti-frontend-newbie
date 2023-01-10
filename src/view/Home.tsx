import { useState } from "react";
import TextInput from "../components/TextInput";
import { EurModel } from "../types/EurModel";

interface HomeProp {
  viewModel: EurModel;
}
const Home = ({ viewModel }: HomeProp) => {
  const [eur, setEur] = useState(1);
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
      <TextInput type='number' setValue={setEur} value={eur} name='유로' />
      <TextInput
        type='number'
        value={viewModel.getExchangeEurToKrw(eur)}
        name='원'
        disabled
        readOnly
      />
    </div>
  );
};

export default Home;
