import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { API_KEY } from "./api/API_KEY";
import { useGetData } from "./Hook/useGetData";
import Title from "./components/Title";
import CurrentBasePrice from "./components/CurrentBasePrice";
import PriceCaseComponent from "./components/PriceCaseComponent";
import ExchangeEurToKrw from "./components/ExchangeEurToKrw";
import Loading from "./components/Loading";

const FlexComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  border: 1px solid red;
`;

const PriceBoxComponent = styled.div`
  display: flex;
  justify-content: center;
`;

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
