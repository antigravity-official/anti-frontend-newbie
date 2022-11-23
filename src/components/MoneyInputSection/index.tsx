import React from "react";

interface PropsType {
  currency: string;
  ratio: number;
}

const MoneyInputSection = ({ currency, ratio }: PropsType) => {
  return (
    <>
      <input /> {currency} ▶︎ <input disabled /> 원
    </>
  );
};

export default MoneyInputSection;
