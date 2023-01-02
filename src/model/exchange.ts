import { formatCurrency, CurrencyFormatOptions } from "./currency";

export interface ExchangeInfo {
  basePrice: number;
  openingPrice: number;
  changePrice: number;
  cashSellingPrice: number;
  cashBuyingPrice: number;
  ttSellingPrice: number;
  ttBuyingPrice: number;
}

export function exchange(
  amount: number,
  rate: number,
  currencyFormatOptions?: CurrencyFormatOptions
): string {
  return formatCurrency(amount * rate, currencyFormatOptions);
}
