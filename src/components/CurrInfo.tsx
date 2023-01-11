import { eurInfoType } from "../types/types";

const CurrInfo = ({ eurInfo }: { eurInfo: eurInfoType }) => {
  const isPositive = eurInfo.basePrice! - eurInfo.openingPrice! > 0;
  
  return (
    <>
      <div>환율기준 (1 유로)</div>
      <div>
        {eurInfo.basePrice}
        <span style={{ color: isPositive ? "red" : "blue" }}>
          {isPositive ? "▲" : "▼"}
        </span>
        {eurInfo.changePrice}원 (
        {(eurInfo.changePrice! / eurInfo.basePrice!) * 100}%)
      </div>
      <div>
        <div>살때 : {eurInfo.cashBuyingPrice}</div>
        <div>팔때 : {eurInfo.cashSellingPrice}</div>
        <div>보낼때 : {eurInfo.ttSellingPrice}</div>
        <div>받을때 : {eurInfo.ttBuyingPrice}</div>
      </div>
    </>
  );
};

export default CurrInfo;
