import React, { useEffect, useState } from "react";
import EurInfoModel from "./model/EurInfoModel";
import { EruInfoType } from "./types/EurInfoType";
import EurInfoView from "./view/EurInfoView";
import ExchangeView from "./view/ExchangeView";

export const App = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<EruInfoType>({
    basePrice: 0,
    openingPrice: 0,
    changePrice: 0,
    cashBuyingPrice: 0,
    cashSellingPrice: 0,
    ttSellingPrice: 0,
    ttBuyingPrice: 0,
  });

  // model ExchangeGetModel
  const getEurInfo = async () => {
    setEurInfo(await EurInfoModel());
    setReady(true);
  };

  useEffect(() => {
    getEurInfo();
    return () => {};
  }, []);

  // view
  if (!isReady) return null;
  return (
    <div className="App">
      <EurInfoView eurInfo={eurInfo} />
      <hr />
      <ExchangeView />
    </div>
  );
};

export default App;
