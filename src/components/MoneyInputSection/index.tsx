import React from "react";

interface PropsType {
  currencyName: string;
  basePrice: number;
}

const MoneyInputSection = ({ currencyName, basePrice }: PropsType) => {
  return (
    <>
      <input /> {currencyName} ▶︎ <input disabled /> 원
    </>
  );
};

export default MoneyInputSection;
