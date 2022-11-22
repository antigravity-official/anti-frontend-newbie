import React, { useEffect, useState } from "react";
import Loading from './view/Loading';
import ExchangeRate from "./view/ExchangeRate";
import useFetching from "./model/useFetching";

export const App = () => {
  const [isReady, setReady] = useState<boolean>(false);
  // const [eurInfo, setEurInfo] = useState<any>({});

  // const getEurInfo = async () => {
  //   const krweur = await fetch(
  //     "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
  //   )
  //     .then((response) => response.json())
  //     .then((array) => array[0]);

  //   setEurInfo(krweur);
  //   setReady(true);
  // };

  // useEffect(() => {
  //   getEurInfo();
  //   return () => {};
  // }, []);
  const data = useFetching(
    "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR",
    setReady
  )

  if (!isReady) return (
    <Loading></Loading>
  );
  return (
    <div className="App">
      <ExchangeRate props={data}></ExchangeRate>
    </div>
  );
};

export default App;
