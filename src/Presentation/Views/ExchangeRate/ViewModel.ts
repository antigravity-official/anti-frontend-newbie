import { useCallback } from "react";
import { addComma, formattingWon, unComma } from "../../../utils";
import useFetchExchangeInfo from "../../../hooks/useFetchExchangeInfo";
import { Currency } from "../../../../typing";
import useInput from "../../../hooks/useInput";

const ExchangeRateViewModel = (currency: Currency) => {
  const { isReady, exchangeInfo } = useFetchExchangeInfo(currency);
  const { money, onChange, inputError } = useInput("");

  // Title 과 Info 에 띄워주는 원화를 내림했기때문에 해당 로직에도 Math.floor 를 적용하여 계산했다.
  const exchangeEurToKrw = useCallback(
    (inputMoney: string, basePrice: number) => {
      const pureMoney = Number(unComma(inputMoney));
      const newBasePrice = Math.floor(basePrice);
      const exchangedMoney = Math.floor(pureMoney * newBasePrice);
      const formattingMoney = addComma(exchangedMoney);
      return formattingMoney;
    },
    []
  );

  const renderArrow = (base: number, open: number) => {
    if (base - open > 0) {
      return "▲";
    }
    if (base - open < 0) {
      return "▼";
    }
    return "-";
  };

  const calcChangeRate = (change: number, base: number) => {
    return (Math.floor(change) / Math.floor(base)) * 100;
  };

  if (!isReady || exchangeInfo === null) {
    return { isReady, exchangeInfo };
  }

  const {
    basePrice,
    openingPrice,
    currencyName,
    changePrice,
    cashBuyingPrice,
    cashSellingPrice,
    ttSellingPrice,
    ttBuyingPrice,
  } = exchangeInfo;

  const arrow = renderArrow(basePrice, openingPrice);
  const changeRate = calcChangeRate(changePrice, basePrice);
  const exchangedMoney = exchangeEurToKrw(money, basePrice);
  const formattingBasePrice = formattingWon(basePrice);
  const formattingChangePrice = formattingWon(changePrice);
  const formattingCashBuyingPrice = formattingWon(cashBuyingPrice);
  const formattingSellingPrice = formattingWon(cashSellingPrice);
  const formattingTtSellingPrice = formattingWon(ttSellingPrice);
  const formattingTtBuyingPrice = formattingWon(ttBuyingPrice);

  return {
    isReady,
    arrow,
    currencyName,
    formattingBasePrice,
    formattingChangePrice,
    changeRate,
    formattingCashBuyingPrice,
    formattingSellingPrice,
    formattingTtSellingPrice,
    formattingTtBuyingPrice,
    money,
    exchangedMoney,
    onChange,
    inputError,
  };
};

export default ExchangeRateViewModel;
