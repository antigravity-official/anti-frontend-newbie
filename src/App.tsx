import React, { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";

export const App = () => {
  type EuroInfo = {
    basePrice: number;
    openingPrice: number;
    changePrice: number;
    cashBuyingPrice: number;
    cashSellingPrice: number;
    ttSellingPrice: number;
    ttBuyingPrice: number;
  };

  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<EuroInfo>({
    basePrice: 0,
    openingPrice: 0,
    changePrice: 0,
    cashBuyingPrice: 0,
    cashSellingPrice: 0,
    ttSellingPrice: 0,
    ttBuyingPrice: 0,
  });
  const [currInput, setCurrInput] = useState<number>(0);

  const getEurInfo = async () => {
    const krweur = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
      .then((response) => response.json())
      .then((array) => array[0]);
    // console.log(krweur);
    // {
    //   "code": "FRX.KRWEUR",
    //   "currencyCode": "EUR",
    //   "currencyName": "유로",
    //   "country": "유로",
    //   "name": "유로 (KRW/EUR)",
    //   "date": "2023-01-09",
    //   "time": "12:56:31",
    //   "recurrenceCount": 583,
    //   "basePrice": 1328.68,
    //   "openingPrice": 1348.81,
    //   "highPrice": 1348.81,
    //   "lowPrice": 1327.35,
    // }
    setEurInfo({
      basePrice: krweur.basePrice,
      openingPrice: krweur.openingPrice,
      changePrice: krweur.changePrice,
      cashBuyingPrice: krweur.cashBuyingPrice,
      cashSellingPrice: krweur.cashSellingPrice,
      ttSellingPrice: krweur.ttSellingPrice,
      ttBuyingPrice: krweur.ttBuyingPrice,
    });
    setReady(true);
  };

  // const exchangeEurToKrw = (krw: number) => krw * eurInfo?.basePrice;
  const exchangeEurToKrw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    const removedCommaValue = Number(value.replaceAll(",", ""));
    setCurrInput(eurInfo.basePrice * removedCommaValue);
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
      <NumericFormat
        onChange={(e) => exchangeEurToKrw(e)}
        decimalScale={2}
        thousandSeparator=","
      ></NumericFormat>
      유로 ▶︎
      <NumericFormat
        value={currInput}
        decimalScale={0}
        thousandSeparator=","
        disabled
      ></NumericFormat>
      원
    </div>
  );
};

export default App;
