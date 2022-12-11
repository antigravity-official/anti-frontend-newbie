import React from "react";

const useExchange = (value: number, basePrice: number): string => {
  return Number(Math.floor(value * basePrice)).toLocaleString();
};

export default useExchange;
