import React, { useEffect, useState } from "react";

const Spinner = () => {
  return <div>로딩중...</div>;
};

export const App = () => {
  interface EuroInfo {
    basePrice: number;
    openingPrice: number;
    changePrice: number;
    cashBuyingPrice: number;
    cashSellingPrice: number;
    ttBuyingPrice: number;
    ttSellingPrice: number;
    [key: string]: string | number;
  }

  const [isReady, setReady] = useState<boolean>(false);
  const [eurInfo, setEurInfo] = useState<EuroInfo>();
  const [eurString, setEurString] = useState<string>("");
  const [eurNumber, setEurNumber] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const getEurInfo = async () => {
    const krweur = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
      .then((response) => response.json())
      .then((array) => array[0]);

    setEurInfo(krweur);
    setReady(true);
  };

  const exchangeEurToKrw = (krw: number) => krw * eurInfo.basePrice;

  const onChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eurValue: string = event.target.value;
    const nonCommaEur: number = Number(eurValue.replaceAll(",", ""));
    const commaEur: string = nonCommaEur.toLocaleString();

    setEurString(commaEur);
    setEurNumber(nonCommaEur);
  };

  const getResultValue = () => {
    const krwValue: number = exchangeEurToKrw(eurNumber);
    const floorKrw: number = Math.floor(krwValue);
    const commaKrw: string = floorKrw.toLocaleString();
    return commaKrw;
  };

  useEffect(() => {
    getEurInfo();
    setLoading(false);
  });

  if (!isReady) return null;
  return (
    <div className="App">
      {loading ? <Spinner /> : "현재 환율"}
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
      <input type="text" value={eurString} onChange={onChangeInputValue} />
      유로 ▶︎
      <input disabled value={getResultValue()} /> 원
    </div>
  );
};

export default App;
