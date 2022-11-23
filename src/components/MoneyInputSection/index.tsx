import React from "react";
import { useGetExchangeInfoByCodeQuery } from "../../apis/exchange/ExchangeApi.query";

interface PropsType {
  code: string;
}

const MoneyInputSection = ({ code }: PropsType) => {
  const { data: info } = useGetExchangeInfoByCodeQuery(code);
  return (
    <>
      <input /> {info?.currencyName} ▶︎ <input disabled /> 원
    </>
  );
};

export default MoneyInputSection;
