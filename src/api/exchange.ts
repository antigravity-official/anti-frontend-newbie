import { ExchangeInfo } from "../model/exchange";

type ExchangeInfoResult = [ExchangeInfo];

export const getEurInfo = async (): Promise<ExchangeInfo> => {
  const krweur = (await fetch(
    "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
  ).then((response) => response.json())) as ExchangeInfoResult;

  return krweur[0];
};
