import React, { memo } from "react";
import { ExchangeInfo } from "../../../typing";
import { addComma } from "../../utils";

interface Props {
  exchangeInfo: ExchangeInfo;
}

const ExchangeRateInfo = memo(({ exchangeInfo }: Props) => {
  return (
    <>
      <div>살때 : {addComma(exchangeInfo.cashBuyingPrice)}</div>
      <div>팔때 : {addComma(exchangeInfo.cashSellingPrice)}</div>
      <div>보낼때 : {addComma(exchangeInfo.ttSellingPrice)}</div>
      <div>받을때 : {addComma(exchangeInfo.ttBuyingPrice)}</div>
    </>
  );
});

export default ExchangeRateInfo;
