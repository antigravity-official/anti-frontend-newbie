import { BasePriceNum } from "../types/ExchangeTypes";

export const exchangeEurToKrw = (eur: number, props: BasePriceNum): string => {
  const eurToKrw = Math.floor(eur * props.basePrice).toLocaleString();
  return eurToKrw;
};
