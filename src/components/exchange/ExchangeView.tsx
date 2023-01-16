import React, { useState } from "react";
import { EurInfo } from "../../model/eurInfo";
import { NullCheck } from "../../utils";

interface Props {
  eurInfo?: EurInfo;
  kwr: number;
  percent: string;
  arrowDirection: string;
}

const ExchangeView: React.FC<Props> = ({
  eurInfo,
  kwr,
  percent,
  arrowDirection,
}) => {
  const [eur, setEur] = useState("");

  return (
    <>
      <div>환율기준 (1 유로)</div>
      <div>
        <span>{NullCheck(eurInfo?.basePrice)}</span>
        <span>{arrowDirection}</span>
        <span>{NullCheck(eurInfo?.changePrice)}원</span>
        <span>({percent})</span>
      </div>
      <div>
        <div>살때 : {NullCheck(eurInfo?.cashBuyingPrice)}</div>
        <div>팔때 : {NullCheck(eurInfo?.cashSellingPrice)}</div>
        <div>보낼때 : {NullCheck(eurInfo?.ttSellingPrice)}</div>
        <div>받을때 : {NullCheck(eurInfo?.ttBuyingPrice)}</div>
      </div>
      <hr />
      <input onChange={() => console.log("good")} value={0} /> 유로 ▶︎{" "}
      <input disabled value={kwr} readOnly /> 원
    </>
  );
};
export default ExchangeView;
