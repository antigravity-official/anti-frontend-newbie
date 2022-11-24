import React, { useEffect, useState } from "react";
import ExchangeRate from "./components/ExchangeRate";
import InputExchange from "./components/InputExchange";
import Loading from "./components/Loading";
import { EuroInfo } from "./types/EuroInfoTypes";

export const App = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState <EuroInfo|null>(null);

  const getInfo = async () => {
    const krweur = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
      .then((response) => response.json())
      .then((array) => array[0]);

    setEurInfo(krweur);
    setReady(true);
  };

  useEffect(() => {
    getInfo();
    return () => {};
  }, []);

  if (!isReady) return <Loading/>;
  return (
    <div className="App">
      {eurInfo && <ExchangeRate eurInfo={eurInfo}/>}
        <hr />
      {eurInfo && <InputExchange eurInfo={eurInfo}/>}
    </div>
  );
};

export default App;
