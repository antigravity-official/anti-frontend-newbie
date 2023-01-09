import React, { useEffect, useState } from "react";
import EurInfo from "./interfaces/EurInfo";

export const App = () => {
  const [isReady, setReady] = useState<boolean>(false);
  const [eurInfo, setEurInfo] = useState<EurInfo | null>(null);
  const [eurInput, setEurInput] = useState<string>("");
  const [exchangedKrw, setExchangedKrw] = useState<number>();

  const getEurInfo = async () => {
    const krweur = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
      .then((response) => response.json())
      .then((array) => array[0]);

    setEurInfo(krweur);
    setReady(true);
  };

  const exchangeEurToKrw = (eur: number) =>
    eurInfo ? eur * eurInfo.basePrice : null;

  const handleEurInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regEx = /^\d*.?\d{0,2}$/;
    let input = e.target.value;
    if (!regEx.test(input)) {
      input = input.substring(0, input.length - 1);
      setEurInput(input);
    } else {
      setEurInput(input);
    }
    let krw = exchangeEurToKrw(Number(input));
    krw && setExchangedKrw(Math.floor(krw));
  };

  useEffect(() => {
    getEurInfo();
    return () => {};
  }, []);

  if (!isReady) return null;
  return (
    <div className="App">
      <div>환율기준 (1 유로)</div>
      {eurInfo && (
        <div>
          {eurInfo.basePrice}
          {eurInfo.basePrice - eurInfo.openingPrice > 0 && "▲"}
          {eurInfo.basePrice - eurInfo.openingPrice < 0 && "▼"}
          {eurInfo.changePrice}원 (
          {(eurInfo.changePrice / eurInfo.basePrice) * 100}%)
        </div>
      )}
      <div>
        <div>살때 : {eurInfo?.cashBuyingPrice}</div>
        <div>팔때 : {eurInfo?.cashSellingPrice}</div>
        <div>보낼때 : {eurInfo?.ttSellingPrice}</div>
        <div>받을때 : {eurInfo?.ttBuyingPrice}</div>
      </div>
      <hr />
      <input type="number" value={eurInput} onChange={handleEurInput} /> 유로 ▶︎{" "}
      <input value={exchangedKrw} disabled /> 원
    </div>
  );
};

export default App;
