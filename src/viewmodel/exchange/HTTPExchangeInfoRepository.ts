import { CurrencyCode } from "../../model/currency";
import { ExchangeInfo, ExchangeInfoRepository } from "../../model/exchange";

type ExchangeInfoResult = [ExchangeInfo];

class HTTPExchangeInfoRepository implements ExchangeInfoRepository {
  async get(
    fromCountry: CurrencyCode,
    toCountry: CurrencyCode
  ): Promise<ExchangeInfo> {
    const krweur = (await fetch(
      `https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.${toCountry}${fromCountry}`
    ).then((response) => response.json())) as ExchangeInfoResult;

    return krweur[0];
  }
}

export default HTTPExchangeInfoRepository;
