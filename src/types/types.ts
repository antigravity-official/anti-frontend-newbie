export interface IEurInfo {
  basePrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  change: string;
  changePrice: number;
  changeRate: number;
  code: string;
  country: string;
  createdAt: string;
  currencyCode: string;
  currencyName: string;
  currencyUnit: number;
  date: string;
  exchangeCommission: number;
  openingPrice: number;
  time: string;
  ttBuyingPrice: number;
  ttSellingPrice: number;
  error?: unknown;
}
