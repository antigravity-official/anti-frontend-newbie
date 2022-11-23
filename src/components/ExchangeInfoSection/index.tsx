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
        {basePrice}원{change === "RISE" ? " ▲ " : null}
        {change === "FALL" ? " ▼ " : null}
        {/*TODO : Change 가 같을 때?*/}
        {changePrice}원 ({((changePrice / basePrice) * 100).toFixed(3)}%)
      </div>
      <div>
        <div>살때 : {cashBuyingPrice.toLocaleString("ko-KR")}원</div>
        <div>팔때 : {cashSellingPrice.toLocaleString("ko-KR")}원</div>
        <div>보낼때 : {ttSellingPrice.toLocaleString("ko-KR")}원</div>
        <div>받을때 : {ttBuyingPrice.toLocaleString("ko-KR")}원</div>
      </div>
    </>
  );
};

export default ExchangeInfoSection;
