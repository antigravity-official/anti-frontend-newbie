import React, { useEffect, useState } from "react";
import { GetEurInfoReturnType } from "../../../types";
import getEurInfo from "../../apis/getEurInfo";

const Home = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<
    GetEurInfoReturnType | Record<string, never>
  >({});

  useEffect(() => {
    getEurInfo().then((data) => {
      setEurInfo(data);
      setReady(true);
    });
  }, []);

  if (!isReady) return null;

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

export default Home;
