import React, { useState } from "react";
import styled from "styled-components";
import { PriceType } from "../types/types";

const ExchangeEurToKrw = ({ basePrice }: PriceType) => {
  const [value, setValue] = useState<number>(0);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(+event.target.value);
  };

  const exchangeEurToKrw = (): number => {
    return Number((value * basePrice).toFixed(2));
  };

  return (
    <>
      <input placeholder="0" onChange={onChange} /> 유로 ▶︎{" "}
      <input value={exchangeEurToKrw()} disabled /> 원
    </>
  );
};

export default ExchangeEurToKrw;
