import React from "react";

interface PropsType {
  currencyName: string;
  basePrice: number;
  change: string;
  changePrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  ttSellingPrice: number;
  ttBuyingPrice: number;
}

const ExchangeInfoSection = ({
  currencyName,
  basePrice,
  change,
  changePrice,
  cashBuyingPrice,
  cashSellingPrice,
  ttSellingPrice,
  ttBuyingPrice,
}: PropsType) => {
  return (
    <>
      <div>환율기준 (1 {currencyName})</div>
      <div>
        {basePrice}
        {change === "RISE" ? "▲" : null}
        {change === "FALL" ? "▼" : null}
        {changePrice}원 ({(changePrice / basePrice) * 100}%)
      </div>
      <div>
        <div>살때 : {cashBuyingPrice}</div>
        <div>팔때 : {cashSellingPrice}</div>
        <div>보낼때 : {ttSellingPrice}</div>
        <div>받을때 : {ttBuyingPrice}</div>
      </div>
    </>
  );
};

export default ExchangeInfoSection;
