import React from "react";

interface PropsType {
  info: {
    basePrice: number;
    cashBuyingPrice: number;
    cashSellingPrice: number;
    change: string;
    changePrice: number;
    changeRate: number;
    code: string;
    country: string;
    createdAt: string;
    currencyCode: string;
    currencyName: string;
    currencyUnit: 1;
    date: string;
    exchangeCommission: number;
    fcSellingPrice: null;
    high52wDate: string;
    high52wPrice: number;
    highPrice: number;
    id: number;
    low52wDate: string;
    low52wPrice: number;
    lowPrice: number;
    modifiedAt: string;
    name: string;
    openingPrice: number;
    provider: string;
    recurrenceCount: number;
    signedChangePrice: number;
    signedChangeRate: number;
    tcBuyingPrice: null;
    time: string;
    timestamp: number;
    ttBuyingPrice: number;
    ttSellingPrice: number;
    usDollarRate: number;
  };
}

const ExchangeInfoSection = ({ info }: PropsType) => {
  return (
    <>
      <div>환율기준 (1 {info.currencyName})</div>
      <div>
        {info.basePrice}
        {info.basePrice - info.openingPrice > 0 && "▲"}
        {info.basePrice - info.openingPrice < 0 && "▼"}
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
