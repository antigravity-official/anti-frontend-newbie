import React from "react";
import { EurInfo } from "../../model/eurInfo";
import { NullCheck } from "../../utils";

interface Props {
  eurInfo?: EurInfo;
}

const ExchangeView: React.FC<Props> = ({ eurInfo }) => {
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
        <span>{NullCheck(eurInfo?.basePrice)}</span>
        <span>
          {getArrowDirection(eurInfo?.basePrice, eurInfo?.openingPrice)}
        </span>
        <span>{NullCheck(eurInfo?.changePrice)}원</span>
        <span>({getPercent(eurInfo?.changePrice, eurInfo?.basePrice)})</span>
      </div>
      <div>
        <div>살때 : {NullCheck(eurInfo?.cashBuyingPrice)}</div>
        <div>팔때 : {NullCheck(eurInfo?.cashSellingPrice)}</div>
        <div>보낼때 : {NullCheck(eurInfo?.ttSellingPrice)}</div>
        <div>받을때 : {NullCheck(eurInfo?.ttBuyingPrice)}</div>
      </div>
      <hr />
      <input /> 유로 ▶︎ <input disabled /> 원
    </>
  );
};
export default ExchangeView;
