import React from "react";

type eurInfoType = {
  [key: string]: number | string;
};

const EurInfo = ({ eurInfo }: any): React.ReactElement => {
  const {
    basePrice,
    openingPrice,
    changePrice,
    cashBuyingPrice,
    cashSellingPrice,
    ttSellingPrice,
    ttBuyingPrice,
  } = eurInfo;

  return (
    <div className="App">
      <div>환율기준 (1 유로)</div>
      <div>
        {basePrice}
        {basePrice - openingPrice > 0 && "▲"}
        {basePrice - openingPrice < 0 && "▼"}
        {changePrice}원 ({(changePrice / basePrice) * 100}%)
      </div>
      <div>
        <div>살때 : {cashBuyingPrice}</div>
        <div>팔때 : {cashSellingPrice}</div>
        <div>보낼때 : {ttSellingPrice}</div>
        <div>받을때 : {ttBuyingPrice}</div>
      </div>
      <hr />
    </div>
  );
};

export default EurInfo;
