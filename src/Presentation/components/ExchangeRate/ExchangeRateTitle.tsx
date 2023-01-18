import React from "react";

interface Props {
  arrow: string | undefined;
  currencyName: string | undefined;
  formattingBasePrice: string | undefined;
  formattingChangePrice: string | undefined;
  changeRate: number | undefined;
}

const ExchangeRateTitle = ({
  arrow,
  currencyName,
  formattingBasePrice,
  formattingChangePrice,
  changeRate,
}: Props) => {
  return (
    <>
      <div>환율기준 (1 {currencyName})</div>
      <div>
        {formattingBasePrice}
        {arrow}
        {formattingChangePrice} ({changeRate}
        %)
      </div>
    </>
  );
};

export default ExchangeRateTitle;
