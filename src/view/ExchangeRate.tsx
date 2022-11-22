import { useState } from "react";
import styled from "styled-components";

const ExchangeRate = (eurInfo: any) => {
  const [money, setMoney] = useState<number>(0);

  const exchangeEurToKrw = (krw: number): string => {
    let price = krw * eurInfo.props.basePrice;
    var twoPrice = price.toFixed(2);
    let result = twoPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return result;
  };

  const changeInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e => element  요소 그자체를 가져온거, 요소는 input
    const { value } = e.target;
    setMoney(Number(value));
  };

  
  return (
      <>
          <ul className="list-group">
              <div className="list-group-item active" aria-current="true">환율기준 (1 유로)</div>
              <div className="list-group-item">
                {eurInfo.props.basePrice}
                {eurInfo.props.basePrice - eurInfo.props.openingPrice > 0 && "▲"}
                {eurInfo.props.basePrice - eurInfo.props.openingPrice < 0 && "▼"}
                {eurInfo.props.changePrice}원 (
                {(eurInfo.props.changePrice / eurInfo.props.basePrice) * 100}%)
              </div>
            <div className="list-group-item">살때 : {eurInfo.props.cashBuyingPrice}</div>
            <div className="list-group-item">팔때 : {eurInfo.props.cashSellingPrice}</div>
            <div className="list-group-item">보낼때 : {eurInfo.props.ttSellingPrice}</div>
            <div className="list-group-item">받을때 : {eurInfo.props.ttBuyingPrice}</div>
        </ul>
        <hr />
        <input onChange={changeInputData} value={money} /> 유로 <br />
        <input disabled value={exchangeEurToKrw(money)} /> 원
        </>

  );
};

export default ExchangeRate;
