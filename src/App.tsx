import React, { useEffect, useState } from "react";
import { useFetch } from "./components/useFetch";
import { NowRate } from "./components/NowRate";
import { RateDeal } from "./components/RateDeal";
//1. get 요청 커스텀 훅으로 뺴기
//2. 환율 정보 따로 폴더 뺴기
//3. 인풋창이랑 변환함수 따로 빼기

export type priceInformation = {
  basePrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  change: string;
  changePrice: number;
  changeRate: number;
  code: string;
  country: string;
  createdAt: string;
  currencyCode: string;
  currencyName: string;
  currencyUnit: number;
  date: string;
  exchangeCommission: number;
  fcSellingPrice: null;
  high52wDate: string;
  high52wPrice: number;
  highPrice: number;
  id: number;
  low52wDate: string;
  low52wPrice: number;
  lowPrice: number;
  modifiedAt: string;
  name: string;
  openingPrice: number;
  provider: string;
  recurrenceCount: number;
  signedChangePrice: number;
  signedChangeRate: number;
  tcBuyingPrice: null;
  time: string;
  timestamp: number;
  ttBuyingPrice: number;
  ttSellingPrice: number;
  usDollarRate: number;
};
export const App = () => {
  const [userWritePrice, setUserWritePrice] = useState<number>(0);
  const [userWrite, setUserWrite] = useState<string>("");
  console.log(userWrite);
  const exchangeEurToKrw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userPrice = e.target.value;
    let regexp = /^\d*.?\d{0,2}$/;
    if (eurInfo && userPrice !== "0") {
      setUserWrite(userPrice);
      if (!regexp.test(userPrice)) {
        alert("소수점 둘째자리까지 입력가능합니다.");
        setUserWrite("");
        return false;
      } else {
        setUserWritePrice(Number(userPrice) * eurInfo.basePrice);
      }
    } else {
      return false;
    }
  };
  const { eurInfo, isReady } = useFetch();

  if (!isReady) return null;
  return (
    <div className="App">
      <div>환율기준 (1 유로)</div>
      {eurInfo ? <NowRate eurInfo={eurInfo} /> : ""}
      <RateDeal />
      <div>
        <div>살때 : {eurInfo ? eurInfo.cashBuyingPrice : ""}</div>
        <div>팔때 : {eurInfo ? eurInfo.cashSellingPrice : ""}</div>
        <div>보낼때 : {eurInfo ? eurInfo.ttSellingPrice : ""}</div>
        <div>받을때 : {eurInfo ? eurInfo.ttBuyingPrice : ""}</div>
      </div>
      <hr />
      <input
        className="keyOff"
        value={userWrite}
        step="0.1"
        type="number"
        onChange={exchangeEurToKrw}
      />{" "}
      유로 ▶︎
      <input disabled value={Math.floor(userWritePrice).toLocaleString("en")} />
      원
    </div>
  );
};

export default App;
