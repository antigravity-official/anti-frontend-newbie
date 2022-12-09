import React, { useEffect, useState } from "react";

type Price = {
  basePrice: number;
  openingPrice: number;
  changePrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  ttSellingPrice: number;
  ttBuyingPrice: number;
  [key: string]: any;
};

export const App = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<{ [key: string]: any }>({});
  const [krwPrice, setKrwPrice] = useState(0);

  const getEurInfo = async () => {
    const krweur: Price = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
      .then((response) => response.json())
      .then((array) => array[0]);

    setEurInfo(krweur);
    setReady(true);
  };
  console.log(eurInfo);

  const exchangeEurToKrw = (krw: number) => {
    setKrwPrice(krw * eurInfo.basePrice);
  };

  useEffect(() => {
    getEurInfo();
    return () => {};
  }, []);

  if (!isReady) return null;
  return (
    <div className="App">
      <div>환율기준 (1 유로)</div>
      <div>
        {eurInfo.basePrice.toLocaleString().split(".")[0]}
        {eurInfo.basePrice - eurInfo.openingPrice > 0 && "▲"}
        {eurInfo.basePrice - eurInfo.openingPrice < 0 && "▼"}
        {eurInfo.changePrice}원 (
        {(eurInfo.changePrice / eurInfo.basePrice) * 100}%)
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
      <input
        defaultValue={0}
        onChange={(e) => exchangeEurToKrw(Number(e.target.value))}
      />{" "}
      유로 ▶︎{" "}
      <input value={krwPrice.toLocaleString().split(".")[0] || ""} disabled />{" "}
      원
    </div>
  );
};

export default App;
