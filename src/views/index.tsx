import React from "react";
import useGetEurInfo from "./hooks/useGetEurInfo";

const ExchangeRate = () => {
  const { data, isLoading, isError } = useGetEurInfo();

  // const exchangeEurToKrw = (krw: number) => krw * data.basePrice;

  if (isLoading) {
    <div>loading...</div>;
  }

  return (
    <div>
      {isError && <>something went wrong</>}
      {!isLoading && data && (
        <div>
          <div>환율기준 (1 유로)</div>
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
          <hr />
          <input /> 유로 ▶︎ <input disabled /> 원
        </div>
      )}
    </div>
  );
};

export default ExchangeRate;
