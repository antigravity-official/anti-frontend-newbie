import React from "react";
import useGetEurInfo from "./hooks/useGetEurInfo";
import Exchange from "../exchange/Exchange";
import Loader from "../../components/loader";
import ErrorPage from "../../components/errorPage";

const Currency = () => {
  const { data, isLoading, isError } = useGetEurInfo();

  if (isLoading) {
    <Loader />;
  }

  return (
    <div>
      {isError && <ErrorPage />}
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
          <Exchange basePrice={data.basePrice} />
        </div>
      )}
    </div>
  );
};

export default Currency;
