import React, { useState } from "react";
import useDebounce from "../hooks/useDebounce";

const ChangeInputEur = ({ basePrice }: any) => {
  const [inputEur, setInputEur] = useState<any>(0); //any 바꿔야함
  const debouncedValue = useDebounce<number>(inputEur, 400);

  console.log("인풋부분 랜더링");

  const inputEuro = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputEur(e.target.value);
  };

  const exchangeEurToKrw = (krw: any) => {
    return krw * basePrice;
  };

  return (
    <>
      <input type="number" onChange={inputEuro} /> 유로 ▶︎
      <input disabled value={Math.floor(exchangeEurToKrw(debouncedValue))} /> 원
    </>
  );
};

export default ChangeInputEur;
