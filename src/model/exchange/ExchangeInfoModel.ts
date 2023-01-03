import { CurrencyCode } from "../currency";
import ExchangeInfo from "./ExchangeInfo";
import ExchangeInfoRepository from "./ExchangeInfoRepository";

export default class ExchangeInfoModel {
  info?: ExchangeInfo;
  repository: ExchangeInfoRepository;

  constructor(repository: ExchangeInfoRepository) {
    this.repository = repository;
    this.exchange = this.exchange.bind(this);
  }

  async get(
    fromCountry: CurrencyCode,
    toCountry: CurrencyCode
  ): Promise<ExchangeInfo> {
    if (this.info === undefined) {
      this.info = await this.repository.get(fromCountry, toCountry);
    }

    return this.info;
  }

  exchange(amount: number): number {
    if (this.info === undefined) {
      throw new Error("get an ExchangeInfo first");
    }

    return amount * this.info.basePrice;
  }
}
