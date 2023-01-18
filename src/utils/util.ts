import { EurInfo } from "../interfaces/euro";
import { CASH_TT_INFO_LIST, CASH_TT_INFO_TEXT, KR_DECIMAL } from "./constant";

export const exchangeEurToKrw = (krw: number, basePrice: number) => krw * basePrice;

export const priceToLocaleString = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getEurStandardText = (basePriceNumber: number, changePriceNumber: number, openingPriceNumber: number) => {
  const basePrice = priceToLocaleString(Number(basePriceNumber.toFixed(KR_DECIMAL)));
  const changePrice = priceToLocaleString(Number(changePriceNumber.toFixed(KR_DECIMAL)));
  const changeArrow = basePriceNumber - openingPriceNumber > 0 ? "▲" : "▼";
  const changePricePercentage = `${((changePriceNumber / basePriceNumber) * 100).toFixed(2)}%`;
  return {
    basePrice,
    changeArrow,
    changePrice,
    changePricePercentage,
  };
};

export const getCashTtInfoTextList = (eurInfo: EurInfo) => {
  return CASH_TT_INFO_LIST.map(
    (key) => `${CASH_TT_INFO_TEXT[key]} : ${priceToLocaleString(Number(Number(eurInfo[key]).toFixed(KR_DECIMAL)))}`
  );
};

export const isNumberHundredths = (testNumber: number) => {
  return /^[\d]*\.?[\d]{0,2}$/.test(testNumber.toString());
};
