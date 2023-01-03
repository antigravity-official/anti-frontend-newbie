export enum CommaPosition {
  tens = 1,
  hundreds = 2,
  thoudsands = 3,
}

export type CurrencyCode = "EUR" | "KRW";

export interface CurrencyFormat {
  commaPosition: CommaPosition;
  decimalPlace: number;
  inKorean: string;
}

export const CURRENCY_FORMAT: { [key in CurrencyCode]: CurrencyFormat } = {
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

export interface CurrencyFormatOptions {
  commaPosition?: CommaPosition;
  decimalPlace?: number;
}

const defaultCurrencyFormatOptions: CurrencyFormatOptions = {
  commaPosition: CommaPosition.thoudsands,
  decimalPlace: 0,
};

export function formatCurrency(
  amount: number,
  options?: CurrencyFormatOptions
): string {
  const { commaPosition, decimalPlace } = {
    ...defaultCurrencyFormatOptions,
    ...options,
  };
  let [integer, decimal] = String(amount).split(".");

  if (commaPosition) {
    integer = Array.from(integer).reduceRight((acc, cur, idx) => {
      const idxFromRight = integer.length - 1 - idx;
      if (!idxFromRight) return cur;
      return (idxFromRight % commaPosition ? cur : cur + ",") + acc;
    }, "");
  }

  if (decimalPlace! > 0) {
    decimal =
      "." +
      (decimal ? decimal.slice(undefined, decimalPlace) : "").padEnd(
        decimalPlace!,
        "0"
      );
  } else {
    decimal = "";
  }

  return integer + decimal;
}
