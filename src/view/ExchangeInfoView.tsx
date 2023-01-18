import * as React from "react";

import { tExchangInfoData } from "../_types/exchangeInfo";
import { floor } from "../_utils/demicalPoint";
import { comma } from "../_utils/comma";

export default function ExchangeInfoView({
  eurInfo,
}: {
  eurInfo: tExchangInfoData;
}) {
  return (
    <>
      <div>환율기준 (1 유로)</div>
      <div>
        {comma(floor(eurInfo.basePrice, 0))} 원
        {eurInfo.basePrice - eurInfo.openingPrice > 0 && "▲"}
        {eurInfo.basePrice - eurInfo.openingPrice < 0 && "▼"}
        {eurInfo.changePrice}원 (
        {(eurInfo.changePrice / eurInfo.basePrice) * 100}
        %)
      </div>
      <div>
        <div>살때 : {comma(floor(eurInfo.cashBuyingPrice, 0))} 원</div>
        <div>팔때 : {comma(floor(eurInfo.cashSellingPrice, 0))} 원</div>
        <div>보낼때 : {comma(floor(eurInfo.ttSellingPrice, 0))} 원</div>
        <div>받을때 : {comma(floor(eurInfo.ttBuyingPrice, 0))} 원</div>
      </div>
    </>
  );
}
