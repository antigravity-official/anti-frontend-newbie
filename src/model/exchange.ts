export interface ExchangeInfo {
  basePrice: number;
  openingPrice: number;
  changePrice: number;
  cashSellingPrice: number;
  cashBuyingPrice: number;
  ttSellingPrice: number;
  ttBuyingPrice: number;
}

export const exchange = (amount: number, rate: number) => amount * rate;
