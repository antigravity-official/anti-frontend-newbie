import { ExchangeInfo } from '../type';

const API_KEY="https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"

export const getEurInfo = async () :Promise<ExchangeInfo> => {
    const krweur = (await fetch(API_KEY)
                    .then((response) => response.json()))
    
    return krweur[0];
};