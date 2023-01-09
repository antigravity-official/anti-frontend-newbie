// 사용자에게 보여지는 UI 부분 (환율 정보)

import "../Styles/Exchange.css";
import { EurInfoTypes } from "../types/ExchangeTypes";

function Exchange(eurInfo: EurInfoTypes) {
  const { props } = eurInfo;

  return (
    <div className="Exchange">
      <h1 className="Exchange-title">Exchange Rate Calculator</h1>
      <div className="Exchange-eur">환율기준 (1 유로)</div>
      <div className="Exchange-base">
        {props.basePrice}
        {props.basePrice - props.openingPrice > 0 && "▲"}
        {props.basePrice - props.openingPrice < 0 && "▼"}
        {props.changePrice}원 ({(props.changePrice / props.basePrice) * 100}%)
      </div>
      <div className="Exchange-buy-sell">
        <div>살때 : {props.cashBuyingPrice}</div>
        <div>팔때 : {props.cashSellingPrice}</div>
        <div>보낼때 : {props.ttSellingPrice}</div>
        <div>받을때 : {props.ttBuyingPrice}</div>
      </div>
      <div className="Input-box">
        <label htmlFor="EUR">EUR</label>
        <input id="EUR" className="Exchange-input" />
        <label htmlFor="KRW">KRW</label>
        <input id="KRW" className="Exchange-input" />
      </div>
    </div>
  );
}

export default Exchange;
