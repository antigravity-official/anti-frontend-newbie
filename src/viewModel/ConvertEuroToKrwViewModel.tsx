import React from "react";
import { useState } from "react";

export const ConvertEuroToKrwViewModel = () => {
  const [exchange, setExchange] = useState(0);

  const exchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    const removedCommaValue = Number(value.replaceAll(",", ""));
    return removedCommaValue;
  };

  const onChangeExchangeValue = (value: number) => {
    setExchange(value);
  };

  return { exchange, exchangeInput, onChangeExchangeValue };
};
