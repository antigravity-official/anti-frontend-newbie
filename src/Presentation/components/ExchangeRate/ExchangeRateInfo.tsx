import React, { memo } from "react";

interface Props {
  formattingCashBuyingPrice: string | undefined;
  formattingSellingPrice: string | undefined;
  formattingTtSellingPrice: string | undefined;
  formattingTtBuyingPrice: string | undefined;
}

const ExchangeRateInfo = ({
  formattingCashBuyingPrice,
  formattingSellingPrice,
  formattingTtSellingPrice,
  formattingTtBuyingPrice,
}: Props) => {
  return (
    <>
      <div>살때 : {formattingCashBuyingPrice}</div>
      <div>팔때 : {formattingSellingPrice}</div>
      <div>보낼때 : {formattingTtSellingPrice}</div>
      <div>받을때 : {formattingTtBuyingPrice}</div>
    </>
  );
};

export default memo(ExchangeRateInfo);
