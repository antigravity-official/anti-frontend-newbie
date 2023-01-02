export enum CommaPosition {
  tens = 1,
  hundreds = 2,
  thoudsands = 3,
}

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
