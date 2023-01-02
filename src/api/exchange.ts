import { ExchangeInfo } from "../model/exchange";

type ExchangeInfoResult = [ExchangeInfo];

export const getExchangeInfo = async (codes: string): Promise<ExchangeInfo> => {
  const krweur = (await fetch(
    `https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=${codes}`
  ).then((response) => response.json())) as ExchangeInfoResult;

  return krweur[0];
};
