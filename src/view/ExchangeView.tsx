import React, { useEffect, useState } from "react";
import { ExchangeInfo } from "interfaces/Exchange";
import { commafy } from "utility/numToString";
import CalculatorView from "view/CalculatorView";

type ViewModelProps = {
  exchangeData: ExchangeInfo;
  handleUpdate: ()=> Promise<void>;
  calc: (num: number)=> number;
}

const ExchangeView = ({ exchangeData, handleUpdate, calc }: ViewModelProps) => {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    handleUpdate()
      .then(() => {
        setReady(true);
      });
    
    return () => {};
  }, []);

  if (!isReady) return <div>로딩중</div>;

  return (
    <div className="exchange-info">
      <div>환율기준 (1 유로)</div>
      <div>
        {commafy(exchangeData.basePrice)}
        {exchangeData.basePrice - exchangeData.openingPrice > 0 && "▲"}
        {exchangeData.basePrice - exchangeData.openingPrice < 0 && "▼"}
        {commafy(exchangeData.changePrice)}원 (
        {(exchangeData.changePrice / exchangeData.basePrice) * 100}%)
      </div>
      <div>
        <div>살때 : {commafy(exchangeData.cashBuyingPrice)}</div>
        <div>팔때 : {commafy(exchangeData.cashSellingPrice)}</div>
        <div>보낼때 : {commafy(exchangeData.ttSellingPrice)}</div>
        <div>받을때 : {commafy(exchangeData.ttBuyingPrice)}</div>
      </div>
      <hr />
      <CalculatorView calc={calc} />
    </div>
  );
}

export default ExchangeView;