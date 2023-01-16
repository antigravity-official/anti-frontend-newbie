import React, { memo } from "react";
import { ExchangeInfo } from "../../../typing";
import { addComma } from "../../utils";

interface Props {
  exchangeInfo: ExchangeInfo;
}

const renderArrow = (basePrice: number, openingPrice: number) => {
  if (basePrice - openingPrice > 0) {
    return "▲";
  }
  if (basePrice - openingPrice < 0) {
    return "▼";
  }
};

const calcChangeRate = (changePrice: number, basePrice: number) => {
  return (changePrice / basePrice) * 100;
};

const ExchangeRateTitle = memo(({ exchangeInfo }: Props) => {
  return (
    <>
      <div>환율기준 (1 {exchangeInfo.currencyName})</div>
      <div>
        {addComma(exchangeInfo.basePrice)}
        {renderArrow(exchangeInfo.basePrice, exchangeInfo.openingPrice)}
        {addComma(exchangeInfo.changePrice)}원 (
        {calcChangeRate(exchangeInfo.changePrice, exchangeInfo.basePrice)}%)
      </div>
    </>
  );
});

export default ExchangeRateTitle;
