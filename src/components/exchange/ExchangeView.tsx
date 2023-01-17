import React, { useState } from "react";
import { EurInfo } from "../../model/eurInfo";
import { checkNull } from "../../utils";
import ExchangeForm from "./ExchangeForm";

interface Props {
  eurInfo?: EurInfo;
  exchangeEurToKrw: (number: number) => number;
}

const ExchangeView: React.FC<Props> = ({ eurInfo, exchangeEurToKrw }) => {
  // 퍼센트를 계산해주는 함수
  const getPercent = (changePrice?: number, basePrice?: number) => {
    if (!!changePrice && !!basePrice) {
      return `${(changePrice / basePrice) * 100}%`;
    }
    return "-";
  };

  // 화살표 방향을 결정해주는 함수
  const getArrowDirection = (basePrice?: number, openingPrice?: number) => {
    if (!!basePrice && !!openingPrice) {
      if (basePrice - openingPrice > 0) {
        return "▲";
      } else if (basePrice - openingPrice < 0) {
        return "▼";
      } else {
        return "-";
      }
    }
    return "-";
  };

  return (
    <>
      <div>환율기준 (1 유로)</div>
      <div>
        <span>{checkNull(eurInfo?.basePrice)}</span>
        <span>
          {getArrowDirection(eurInfo?.basePrice, eurInfo?.openingPrice)}
        </span>
        <span>{checkNull(eurInfo?.changePrice)}원</span>
        <span>({getPercent(eurInfo?.changePrice, eurInfo?.basePrice)})</span>
      </div>
      <div>
        <div>살때 : {checkNull(eurInfo?.cashBuyingPrice)}</div>
        <div>팔때 : {checkNull(eurInfo?.cashSellingPrice)}</div>
        <div>보낼때 : {checkNull(eurInfo?.ttSellingPrice)}</div>
        <div>받을때 : {checkNull(eurInfo?.ttBuyingPrice)}</div>
      </div>
      <hr />
      <ExchangeForm exchangeEurToKrw={exchangeEurToKrw} />
    </>
  );
};
export default ExchangeView;
