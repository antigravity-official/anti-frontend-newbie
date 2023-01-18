import { EurInfo } from "../interfaces/euro";
import { CASH_TT_INFO_LIST, CASH_TT_INFO_TEXT } from "./constant";

export const exchangeEurToKrw = (krw: number, basePrice: number) => krw * basePrice;

export const priceToLocaleString = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getEurStandardText = (basePriceNumber: number, changePriceNumber: number, openingPriceNumber: number) => {
  const basePrice = priceToLocaleString(basePriceNumber);
  const changePrice = priceToLocaleString(changePriceNumber);
  const changeArrow = basePriceNumber - openingPriceNumber > 0 ? "▲" : "▼";
  const changePricePercentage = `${(changePriceNumber / basePriceNumber) * 100}%`;
  return {
    basePrice,
    changeArrow,
    changePrice,
    changePricePercentage,
  };
};

export const getCashTtInfoTextList = (eurInfo: EurInfo) => {
  return CASH_TT_INFO_LIST.map((key) => `${CASH_TT_INFO_TEXT[key]} : ${priceToLocaleString(Number(eurInfo[key]))}`);
};
