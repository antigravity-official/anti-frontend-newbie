import { useState } from "react";
import TextInput from "../components/TextInput";
import { EurModel } from "../types/EurModel";

interface HomeProp {
  viewModel: EurModel;
}
const Home = ({ viewModel }: HomeProp) => {
  const [eur, setEur] = useState("1");

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
        {marketPriceGroup.map((item: { name: string; price: number }) => (
          <div key={item.price}>
            {item.name} : {item.price}
          </div>
        ))}
      </div>
      <TextInput
        type='text'
        setValue={setEur}
        value={viewModel.getToLocaleString(eur)}
        name='유로'
      />
      <TextInput
        type='text'
        value={viewModel.getExchangeEurToKrw(eur, 0)}
        name='원'
        disabled
        readOnly
      />
    </div>
  );
};

export default Home;
