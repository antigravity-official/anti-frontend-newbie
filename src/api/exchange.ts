import { ExchangeInfo } from '../model/Model';

export const getEurInfo = async () :Promise<ExchangeInfo> => {
    const krweur = (await fetch(
        "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
    .then((response) => response.json()))
        return krweur[0];
};