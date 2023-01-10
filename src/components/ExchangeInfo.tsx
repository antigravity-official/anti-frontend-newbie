import { useState, useEffect } from "react";
import { ExchangeInfoType } from "../type/exchange";
import { getInfo } from "../api/exchangeInfo";
import ExchangeCalc from "./ExchangeCalc";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { currency } from "../utils/currency";

export default function ExchangeInfo() {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<
    ExchangeInfoType | Record<string, never>
  >({});

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
            {currency(eurInfo.basePrice, "en-US", 2)}
            {+currency(eurInfo.basePrice - eurInfo.openingPrice, "en-US", 2) > 0
              ? "▲"
              : "▼"}
            {currency(eurInfo.changePrice, "en-US", 2)}원{" "}
            {currency(
              (eurInfo.changePrice / eurInfo.basePrice) * 100,
              "en-US",
              2
            )}
            %
          </div>

          <div>
            <div>살때 : {currency(eurInfo.cashBuyingPrice, "en-US", 2)}</div>
            <div>팔때 : {currency(eurInfo.cashSellingPrice, "en-US", 2)}</div>
            <div>보낼때 : {currency(eurInfo.ttSellingPrice, "en-US", 2)}</div>
            <div>받을때 : {currency(eurInfo.ttBuyingPrice, "en-US", 2)}</div>
          </div>
          <ExchangeCalc eurInfo={eurInfo} />
        </>
      )}
    </div>
  );
}
