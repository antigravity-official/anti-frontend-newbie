import React, { useEffect, useState } from "react";
import ViewModel from "./ViewModel";

export const App = () => {
  const { isReady, eurInfo, getEurInfo } = ViewModel();
  const [eurValue, setEurValue] = useState<number>(1);

  const exchangeEurToKrw = (krw: any) => krw * eurInfo.basePrice;

  const onChangeEurValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    console.log(value);

    // 숫자만 입력 가능하도록 처리 [더 나은 방법 있을지?]
    if (isNaN(+value)) {
      return null;
    }

    if (value.includes(",")) {
      value = value.replace(/,/g, "");
    }

    setEurValue(+value);
  };

  const makeComma = (money: number) => {
    return money.toLocaleString();
  };

  useEffect(() => {
    getEurInfo();
    // cleanup fn
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
        {((eurInfo.changePrice / eurInfo.basePrice) * 100).toFixed(2)}%)
      </div>
      <div>
        <div>살때 : {eurInfo.cashBuyingPrice}</div>
        <div>팔때 : {eurInfo.cashSellingPrice}</div>
        <div>보낼때 : {eurInfo.ttSellingPrice}</div>
        <div>받을때 : {eurInfo.ttBuyingPrice}</div>
      </div>
      <hr />
      <input
        value={eurValue.toLocaleString()}
        onChange={(e) => onChangeEurValue(e)}
      />
      유로 ▶︎
      <input disabled value={exchangeEurToKrw(eurValue).toLocaleString()} /> 원
    </div>
  );
};

export default App;
