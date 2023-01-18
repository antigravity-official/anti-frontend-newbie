import React, { useEffect, useState } from "react";
import ExchangeInfoView from "./view/ExchangeInfoView";
import InputView from "./view/InputView";

export const App = () => {
  const [isReady, setReady] = useState(false);

  // const getEurInfo = async () => {
  //   const krweur = await fetch(
  //     "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
  //   )
  //     .then((response) => response.json())
  //     .then((array) => array[0]);

  //   setEurInfo(krweur);
  //   setReady(true);
  // };

  // const exchangeEurToKrw = (krw: any) => krw * eurInfo.basePrice;

  return (
    <div className="App">
      <ExchangeInfoView />
      <hr />
      <InputView />
    </div>
  );
};

export default App;
