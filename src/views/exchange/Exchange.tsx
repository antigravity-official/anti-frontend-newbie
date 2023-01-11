import React from "react";
import { exchangeEurToKrw } from "./hooks/exchangeEurToKrw";

const Exchange = ({ basePrice }: { basePrice: number }) => {
  const [inputEur, setInputEur] = React.useState<number>(0);
  const exchangeKrw = exchangeEurToKrw(inputEur, basePrice);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputEur(+e.target.value);
  };

  return (
    <>
      <input type="number" onChange={handleOnChange} /> 유로 ▶︎ {exchangeKrw} 원
    </>
  );
};

export default Exchange;
