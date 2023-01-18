import React, { memo } from "react";
import { ExchangeInfo } from "../../../../typing";
import { formattingWon } from "../../../utils";

interface Props {
  exchangeInfo: ExchangeInfo;
  renderArrow: (base: number, open: number) => "▲" | "▼" | "-";
  calcChangeRate: (change: number, base: number) => number;
}

const ExchangeRateTitle = memo(
  ({ exchangeInfo, renderArrow, calcChangeRate }: Props) => {
    const { currencyName, basePrice, openingPrice, changePrice } = exchangeInfo;

    return (
      <>
        <div>환율기준 (1 {currencyName})</div>
        <div>
          {formattingWon(basePrice)}
          {renderArrow(basePrice, openingPrice)}
          {formattingWon(changePrice)} ({calcChangeRate(changePrice, basePrice)}
          %)
        </div>
      </>
    );
  }
);

export default ExchangeRateTitle;
