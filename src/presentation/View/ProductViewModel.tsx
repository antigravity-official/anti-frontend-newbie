import React from "react";
import { useQuery } from "react-query";
import { getEurInfo } from "../../models/api";
import { useState } from "react";
import ProductView from "./ProductView";
import { IEurInfo } from "../../types/types";
import Loading from "../Components/loading/Loading";
import Error from "../Components/error/Error";

function ProductViewModel() {
  const [inputValue, setInputValue] = useState("");

  const { data, isLoading, isError, error } = useQuery<IEurInfo, Error>(
    ["EurInfo"],
    getEurInfo,
    {
      retry: 0,
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/[^-.0-9]/g)) {
      e.target.value = e.target.value.replace(/[^-.0-9]/g, "");
    } else {
      const value = e.target.value;
      if (secondDecimalPoint(value)) {
        setInputValue(value);
      }
    }
  };

  const secondDecimalPoint = (value: string) =>
    /^[\d]*\.?[\d]{0,2}$/.test(value);

  const priceComma = (num: number) => num.toLocaleString();

  const exchangeEurToKrw = (krw: number) => Math.floor(+krw * +inputValue);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error error={error.message}></Error>;
  }

  return (
    <>
      <ProductView
        data={data}
        inputValue={inputValue}
        handleChange={handleChange}
        exchangeEurToKrw={exchangeEurToKrw}
        priceComma={priceComma}
      />
    </>
  );
}

export default ProductViewModel;
