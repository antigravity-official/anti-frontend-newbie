import { CurrencyCode } from "../currency";
import ExchangeInfo from "./ExchangeInfo";

export default interface ExchangeInfoRepository {
  get: (
    fromCountry: CurrencyCode,
    toCountry: CurrencyCode
  ) => Promise<ExchangeInfo>;
}
