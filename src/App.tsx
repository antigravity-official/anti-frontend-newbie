import React, { useState } from "react";
import { API_KEY } from "./api/API_KEY";
import { useGetData } from "./Hook/useGetData";
import Title from "./components/Title";
import CurrentBasePrice from "./components/CurrentBasePrice";
import PriceCaseComponent from "./components/PriceCaseComponent";
import ExchangeEurToKrw from "./components/ExchangeEurToKrw";
import Loading from "./components/Loading";
import FlexComponent from "./components/public/FlexComponent";
import PriceBoxComponent from "./components/public/PriceBoxComponent";

export const App = () => {
  const [isReady, setReady] = useState(false);
  const data = useGetData(API_KEY);

  setInterval(() => {
    setReady(true);
  }, 3000);

  if (!isReady) return <Loading />;
  return (
    <div className="App">
      <FlexComponent>
        <Title />
        <PriceBoxComponent>
          <CurrentBasePrice
            basePrice={data.basePrice}
            openingPrice={data.openingPrice}
            changePrice={data.changePrice}
          />
          <PriceCaseComponent
            cashBuyingPrice={data.cashBuyingPrice}
            cashSellingPrice={data.cashSellingPrice}
            ttSellingPrice={data.ttSellingPrice}
            ttBuyingPrice={data.ttBuyingPrice}
          />
        </PriceBoxComponent>
        <ExchangeEurToKrw basePrice={data.basePrice} />
      </FlexComponent>
    </div>
  );
};

export default App;
