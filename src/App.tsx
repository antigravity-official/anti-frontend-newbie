import React, { useEffect, useState } from "react";
import ViewModel from "./ViewModel";
import Spinner from "./Spinner";

export const App = () => {
  const { isReady, eurInfo, getEurInfo } = ViewModel();
  const [eurValue, setEurValue] = useState<string>("1");

  console.log(isReady);

  const exchangeEurToKrw = (krw: any) => krw * eurInfo.basePrice;

  const onChangeEurValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;

    // 천단위 콤마 제거
    if (value.includes(",")) {
      value = value.replaceAll(",", "");
    }

    // 숫자 외 입력
    if (isNaN(+value)) {
      return value.slice(0, -1);
    }

    // 둘째자리만 허용
    if (/^\d*[.]\d{3}$/g.test(value)) {
      value = (+value).toFixed(2);
    }

    setEurValue(value);
  };

  useEffect(() => {
    getEurInfo();
    // cleanup fn
    return () => {};
  }, []);

  if (!isReady) {
    return <Spinner />;
  }

  return (
    <>
      {!isReady ? (
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
            type="text"
            value={eurValue.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            onChange={(e) => onChangeEurValue(e)}
          />
          유로 ▶︎
          <input
            disabled
            value={Math.floor(+exchangeEurToKrw(eurValue)).toLocaleString()}
          />
          원
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default App;
