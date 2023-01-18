import React, { memo } from "react";
import { ExchangeInfo } from "../../../typing";
import { formattingWon } from "../../utils";

interface Props {
  exchangeInfo: ExchangeInfo;
}

const ExchangeRateTitle = memo(({ exchangeInfo }: Props) => {
  const { currencyName, basePrice, openingPrice, changePrice } = exchangeInfo;

  const renderArrow = (base: number, open: number) => {
    if (base - open > 0) {
      return "▲";
    }
    if (base - open < 0) {
      return "▼";
    }
    return "-";
  };

  const calcChangeRate = (change: number, base: number) => {
    return (change / base) * 100;
  };

  return (
    <>
      <div>환율기준 (1 {currencyName})</div>
      <div>
        {formattingWon(basePrice)}
        {renderArrow(basePrice, openingPrice)}
        {formattingWon(changePrice)} ({calcChangeRate(changePrice, basePrice)}%)
      </div>
    </>
  );
});

export default ExchangeRateTitle;
