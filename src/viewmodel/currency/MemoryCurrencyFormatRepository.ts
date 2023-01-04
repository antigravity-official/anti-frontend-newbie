import {
  CommaPosition,
  CurrencyCode,
  CurrencyFormat,
  CurrencyFormatRepository,
} from "../../model/currency";

const CURRENCY_FORMAT: { [key in CurrencyCode]: CurrencyFormat } = {
  EUR: {
    commaPosition: CommaPosition.thoudsands,
    decimalPlace: 2,
    inKorean: "유로",
  },
  KRW: {
    commaPosition: CommaPosition.thoudsands,
    decimalPlace: 0,
    inKorean: "원",
  },
};

class MemoryCurrencyFormatRepository implements CurrencyFormatRepository {
  getFormat(code: CurrencyCode): CurrencyFormat {
    return CURRENCY_FORMAT[code];
  }
}

export default MemoryCurrencyFormatRepository;
