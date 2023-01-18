import React from "react";

const Info: React.FC<{
  data: {
    basePrice: number;
    openingPrice: number;
    changePrice: number;
    cashBuyingPrice: number;
    cashSellingPrice: number;
    ttSellingPrice: number;
    ttBuyingPrice: number;
  };
}> = ({ data }) => {
  return (
    <>
      <div>
        {data.basePrice}
        {data.basePrice - data.openingPrice > 0 && "▲"}
        {data.basePrice - data.openingPrice < 0 && "▼"}
        {data.changePrice}원 ({(data.changePrice / data.basePrice) * 100}%)
      </div>
      <div>
        <div>살때 : {data.cashBuyingPrice}</div>
        <div>팔때 : {data.cashSellingPrice}</div>
        <div>보낼때 : {data.ttSellingPrice}</div>
        <div>받을때 : {data.ttBuyingPrice}</div>
      </div>
    </>
  );
};
export default Info;
