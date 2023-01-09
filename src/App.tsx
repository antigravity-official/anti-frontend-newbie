import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { getEurInfo } from './api/exchange';
import { ExchangeInfo } from './model/Model';


export const App = () => {
  const [eurInfo, setEurInfo] = useState<ExchangeInfo | undefined>(undefined);
  const [eurInput, setEurInput] = useState<string>();
  const [krw, setkrw] = useState<string>();

  const getEurInput = (e :ChangeEvent<HTMLInputElement>) => {
    setEurInput(e.target.value);
    // let eurInput :string = e.target.value;
    console.log('eurInput:',eurInput)
  }
  // const exchangeEurToKrw = (krw: any) => krw * eurInfo.basePrice;

  useEffect(() => {
    getEurInfo().then((priceValue) => { setEurInfo(priceValue) });
    return () => {}
  }, []);

  useEffect(() => {
    if (eurInput != undefined && eurInfo?.basePrice) {
      let totalPrice = parseFloat(eurInput) * eurInfo.basePrice;
      setkrw(totalPrice.toLocaleString('ko-KR'));
    }
  },[eurInput]);


  console.log('eurInfo:',eurInfo);
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
      <input onChange={getEurInput}/> 유로 ▶︎ <input disabled value={krw}/> 원
    </div>
  );
};

export default App;
