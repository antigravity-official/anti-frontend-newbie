import React, { useEffect, useState } from "react";
import Loading from './view/Loading';
import ExchangeRate from "./view/ExchangeRate";

export const App = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<any>({});

  const getEurInfo = async () => {
    const krweur = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
      .then((response) => response.json())
      .then((array) => array[0]);

    setEurInfo(krweur);
    setReady(true);
  };

  useEffect(() => {
    getEurInfo();
    return () => {};
  }, []);

  if (!isReady) return (
    <Loading></Loading>
  );
  return (
    <div className="App">
      <ExchangeRate props={eurInfo}></ExchangeRate>
    </div>
  );
};

export default App;
