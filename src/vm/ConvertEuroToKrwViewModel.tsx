import React from "react";
import { useState } from "react";

export const ConvertEuroToKrwViewModel = () => {
  const [exchange, setExchange] = useState(0);

  const onChangeExchangeValue = (value: number) => {
    setExchange(value);
  };

  const exchangeRemovedCommaValue = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    const removedCommaValue = Number(value.replaceAll(",", ""));
    return removedCommaValue;
  };

  return { exchange, exchangeRemovedCommaValue, onChangeExchangeValue };
};
