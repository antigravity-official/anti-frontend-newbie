import { CurrencyCode } from "./Currency";
import { CurrencyFormat } from "./CurrencyFormat";

export default interface CurrencyFormatRepository {
  getFormat: (code: CurrencyCode) => CurrencyFormat;
}
