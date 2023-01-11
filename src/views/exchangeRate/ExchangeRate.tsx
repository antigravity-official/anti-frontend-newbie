import React from "react";
import Currency from "./currency/Currency";
import Exchange from "./exchange/Exchange";
import useGetEurInfo from "./hooks/useGetEurInfo";
import Loader from "../../components/loader";
import ErrorPage from "../../components/errorPage";

const ExchangeRate = () => {
  const { data, isLoading, isError } = useGetEurInfo();

  if (isLoading) {
    <Loader />;
  }

  return (
    <div>
      {isError && <ErrorPage />}
      {!isLoading && data && (
        <div>
          <Currency eurInfo={data} />
          <hr />
          <Exchange basePrice={data.basePrice} />
        </div>
      )}
    </div>
  );
};

export default ExchangeRate;
