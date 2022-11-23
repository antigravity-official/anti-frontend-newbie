import React from "react";
import { GetExchangeInfoByCodeReturnType } from "../../apis/exchange/ExchangeApi.type";

interface PropsType {
  info: GetExchangeInfoByCodeReturnType;
}

const MoneyInputSection = ({ info }: PropsType) => {
  return (
    <>
      <input /> {info.currencyName} ▶︎ <input disabled /> 원
    </>
  );
};

export default MoneyInputSection;
