import React from "react";
import { useGetExchangeInfoByCodeQuery } from "../../apis/exchange/ExchangeApi.query";

interface PropsType {
  code: string;
}

const ExchangeInfoSection = ({ code }: PropsType) => {
  const { data: info } = useGetExchangeInfoByCodeQuery(code);
  return (
    <>
      <div>환율기준 (1 {info?.currencyName})</div>
      <div>
        {info?.basePrice}
        {info!.basePrice - info!.openingPrice > 0 && "▲"}
        {info!.basePrice - info!.openingPrice < 0 && "▼"}
        {info?.changePrice}원 ({(info!.changePrice / info!.basePrice) * 100}%)
      </div>
      <div>
        <div>살때 : {info?.cashBuyingPrice}</div>
        <div>팔때 : {info?.cashSellingPrice}</div>
        <div>보낼때 : {info?.ttSellingPrice}</div>
        <div>받을때 : {info?.ttBuyingPrice}</div>
      </div>
    </>
  );
};

export default ExchangeInfoSection;
