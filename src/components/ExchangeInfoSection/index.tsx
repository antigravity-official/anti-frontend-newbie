import React from "react";
import { GetExchangeInfoByCodeReturnType } from "../../apis/exchange/ExchangeApi.type";

interface PropsType {
  info: GetExchangeInfoByCodeReturnType;
}

const ExchangeInfoSection = ({ info }: PropsType) => {
  return (
    <>
      <div>환율기준 (1 {info.currencyName})</div>
      <div>
        {info.basePrice}
        {info.change === "RISE" ? "▲" : null}
        {info.change === "FALL" ? "▼" : null}
        {info.changePrice}원 ({(info.changePrice / info.basePrice) * 100}%)
      </div>
      <div>
        <div>살때 : {info.cashBuyingPrice}</div>
        <div>팔때 : {info.cashSellingPrice}</div>
        <div>보낼때 : {info.ttSellingPrice}</div>
        <div>받을때 : {info.ttBuyingPrice}</div>
      </div>
    </>
  );
};

export default ExchangeInfoSection;
