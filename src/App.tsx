import React, { useEffect, useState } from "react";
import { getEurInfo } from "./api/exchange";
import { ExchangeInfo } from "./model/exchange";

export const App = () => {
  const [eurInfo, setEurInfo] = useState<ExchangeInfo | undefined>(undefined);

  useEffect(() => {
    getEurInfo().then((value) => {
      setEurInfo(value);
    });

    return () => {};
  }, []);

  if (!eurInfo) return null;

  return (
    <div className="App">
      <div>환율기준 (1 유로)</div>
      <div>
        {eurInfo.basePrice}
        {eurInfo.basePrice - eurInfo.openingPrice > 0 && "▲"}
        {eurInfo.basePrice - eurInfo.openingPrice < 0 && "▼"}
        {eurInfo.changePrice}원 (
        {(eurInfo.changePrice / eurInfo.basePrice) * 100}%)
      </div>
      <div>
        <div>살때 : {eurInfo.cashBuyingPrice}</div>
        <div>팔때 : {eurInfo.cashSellingPrice}</div>
        <div>보낼때 : {eurInfo.ttSellingPrice}</div>
        <div>받을때 : {eurInfo.ttBuyingPrice}</div>
      </div>
      <hr />
      <input /> 유로 ▶︎ <input disabled /> 원
    </div>
  );
};

export default App;
