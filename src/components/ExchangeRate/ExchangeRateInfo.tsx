import React, { memo } from "react";
import { ExchangeInfo } from "../../../typing";
import { formattingWon } from "../../utils";

interface Props {
  exchangeInfo: ExchangeInfo;
}

const ExchangeRateInfo = memo(({ exchangeInfo }: Props) => {
  const { cashBuyingPrice, cashSellingPrice, ttSellingPrice, ttBuyingPrice } =
    exchangeInfo;
  return (
    <>
      <div>살때 : {formattingWon(cashBuyingPrice)}</div>
      <div>팔때 : {formattingWon(cashSellingPrice)}</div>
      <div>보낼때 : {formattingWon(ttSellingPrice)}</div>
      <div>받을때 : {formattingWon(ttBuyingPrice)}</div>
    </>
  );
});

export default ExchangeRateInfo;
