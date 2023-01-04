import { useEffect, useState } from "react";
import { ExchangeInfo, ExchangeInfoModel } from "../../model/exchange";
import { CurrencyCode } from "../../model/currency";

type ExchangeInfoState = ExchangeInfo | undefined;

const useExchangeViewModel = (
  model: ExchangeInfoModel,
  fromCurrencyCode: CurrencyCode,
  toCurrencyCode: CurrencyCode
) => {
  const [exchangeInfo, setExchangeInfo] =
    useState<ExchangeInfoState>(undefined);

  useEffect(() => {
    model.get(fromCurrencyCode, toCurrencyCode).then((result) => {
      setExchangeInfo(result);
    });

    return () => {};
  }, [model, fromCurrencyCode, toCurrencyCode]);

  return {
    exchangeInfo,
    exchange: model.exchange,
  };
};

export default useExchangeViewModel;
