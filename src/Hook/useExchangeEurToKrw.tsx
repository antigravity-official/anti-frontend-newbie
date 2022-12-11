import React from "react";

const useExchangeEurToKrw = (value: number, basePrice: number): string => {
  return Number(Math.floor(value * basePrice)).toLocaleString();
};

export default useExchangeEurToKrw;
