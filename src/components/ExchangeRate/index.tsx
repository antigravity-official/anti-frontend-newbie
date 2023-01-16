import React from "react";
import ExchangeRateTitle from "./ExchangeRateTitle";
import ExchangeRateInfo from "./ExchangeRateInfo";
import useFetchExchangeInfo from "../../hooks/useFetchExchangeInfo";
import ExchangeInput from "./ExchangeInput";
import { Currency } from "../../../typing";
import { SyncLoader } from "react-spinners";

interface Props {
  currency: Currency;
}

const ExchangeRate = ({ currency }: Props) => {
  const { isReady, exchangeInfo } = useFetchExchangeInfo(currency);

  if (!isReady || exchangeInfo === null)
    return (
      <>
        <SyncLoader color="#36d7b7" />

        <div>환율 정보를 로딩중입니다.</div>
      </>
    );

  return (
    <>
      <ExchangeRateTitle exchangeInfo={exchangeInfo} />
      <ExchangeRateInfo exchangeInfo={exchangeInfo} />
      <hr />
      <ExchangeInput exchangeInfo={exchangeInfo} />
    </>
  );
};

export default ExchangeRate;
