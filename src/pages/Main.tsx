import React, { useEffect, useState } from "react";
import ExchangeInput from "../components/ExchangeInput";
import Loading from "../components/Loading";

export type Price = {
  basePrice: number;
  openingPrice: number;
  changePrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  ttSellingPrice: number;
  ttBuyingPrice: number;
  [key: string]: number | string | Date;
};

const Main = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<Price>({} as Price);

  const getEurInfo = async () => {
    const krweur: Price = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
      .then((response) => response.json())
      .then((array) => array[0]);

    setEurInfo(krweur);
    setReady(true);
  };
  // console.log(eurInfo);

  useEffect(() => {
    getEurInfo();
    return () => {};
  }, []);

  if (!isReady) return <Loading />;
  return (
    <div className="container">
      <div>환율기준 (1 유로)</div>
      <div>
        <p>{eurInfo.basePrice.toLocaleString().split(".")[0]}</p>
        {eurInfo.basePrice - eurInfo.openingPrice > 0 && "▲"}
        {eurInfo.basePrice - eurInfo.openingPrice < 0 && "▼"}
        {eurInfo.changePrice}원 (
        {((eurInfo.changePrice / eurInfo.basePrice) * 100).toFixed(3)}%)
      </div>
      <div>
        <div>
          살때 : {eurInfo.cashBuyingPrice.toLocaleString().split(".")[0]}
        </div>
        <div>
          팔때 : {eurInfo.cashSellingPrice.toLocaleString().split(".")[0]}
        </div>
        <div>
          보낼때 : {eurInfo.ttSellingPrice.toLocaleString().split(".")[0]}
        </div>
        <div>
          받을때 : {eurInfo.ttBuyingPrice.toLocaleString().split(".")[0]}
        </div>
      </div>
      <hr />
      <ExchangeInput eurInfo={eurInfo} />
    </div>
  );
};

export default Main;
