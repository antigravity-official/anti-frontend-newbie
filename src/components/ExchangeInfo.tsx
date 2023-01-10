import { useState, useEffect } from "react";
import { ExchangeInfoType } from "../type/exchange";
import { getInfo } from "../api/exchangeInfo";
import ExchangeCalc from "./ExchangeCalc";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ExchangeInfo() {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<
    ExchangeInfoType | Record<string, never>
  >({});

  const eurUnit = (eur: number) => {
    const eurOption = { maximumFractionDigits: 2 };
    return eur.toLocaleString("en-US", eurOption);
  };

  const getEurInfo = async () => {
    const krweur = await getInfo();
    setEurInfo(krweur);
    setReady(true);
  };

  useEffect(() => {
    getEurInfo();
    return () => {};
  }, []);
  return (
    <div className="App">
      <div>환율기준 (1 유로)</div>
      {isReady === false ? (
        <Skeleton count={6} width="170px" />
      ) : (
        <>
          <div>
            {eurUnit(eurInfo.basePrice)}
            {+eurUnit(eurInfo.basePrice - eurInfo.openingPrice) > 0 ? "▲" : "▼"}
            {eurUnit(eurInfo.changePrice)}원{" "}
            {eurUnit((eurInfo.changePrice / eurInfo.basePrice) * 100)}%
          </div>

          <div>
            <div>살때 : {eurUnit(eurInfo.cashBuyingPrice)}</div>
            <div>팔때 : {eurUnit(eurInfo.cashSellingPrice)}</div>
            <div>보낼때 : {eurUnit(eurInfo.ttSellingPrice)}</div>
            <div>받을때 : {eurUnit(eurInfo.ttBuyingPrice)}</div>
          </div>
          <ExchangeCalc eurInfo={eurInfo} />
        </>
      )}
    </div>
  );
}
