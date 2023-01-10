import "../Styles/Exchange.css";

import { useState } from "react";
import { EurInfoTypes } from "../types/ExchangeTypes";
import { exchangeEurToKrw } from "../viewModel/ExchangeEurKrw";

function Exchange(eurInfo: EurInfoTypes) {
  const { props } = eurInfo;

  const [eurValue, setEurValue] = useState<number>(0);

  let fixedEurValue = eurValue / 100;

  console.log(fixedEurValue);

  const exchangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEurValue(Number(e.target.value));
  };

  return (
    <div className="Exchange">
      <h1 className="Exchange-title">Exchange Rate Calculator</h1>
      <strong>Eur To Krw</strong>
      <div className="Exchange-eur">환율기준 (1 유로)</div>
      <div className="Exchange-base">
        {props.basePrice}
        {props.basePrice - props.openingPrice > 0 && "▲"}
        {props.basePrice - props.openingPrice < 0 && "▼"}
        {props.changePrice}원 ({(props.changePrice / props.basePrice) * 100}%)
      </div>
      <div className="Exchange-buy-sell">
        <div>살때 : {props.cashBuyingPrice} 원</div>
        <div>팔때 : {props.cashSellingPrice} 원</div>
        <div>보낼때 : {props.ttSellingPrice} 원</div>
        <div>받을때 : {props.ttBuyingPrice} 원</div>
      </div>
      <div className="Input-box">
        <label htmlFor="EUR">EUR</label>
        <input
          id="EUR"
          onChange={exchangeData}
          value={fixedEurValue}
          className="Exchange-input"
        />
        <label htmlFor="KRW">KRW</label>
        <input
          id="KRW"
          value={`${exchangeEurToKrw(eurValue, props)} 원`}
          className="Exchange-input"
          readOnly
        />
      </div>
    </div>
  );
}

export default Exchange;
