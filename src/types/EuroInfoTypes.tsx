export interface EuroInfo {
  code: string;
  currencyCode: string;
  currencyName: string;
  country: string;
  name: string;
  date: string;
  time: string;
  recurrenceCount: number;
  basePrice: number;
  openingPrice: number;
  highPrice: number;
  lowPrice: number;
  change: string;
  changePrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  ttBuyingPrice: number;
  ttSellingPrice: number;
  tcBuyingPrice: object;
  fcSellingPrice: object;
  exchangeCommission: number;
  usDollarRate: number;
  high52wPrice: number;
  high52wDate: string;
  low52wPrice: number;
  low52wDate: string;
  currencyUnit: number;
  provider: string;
  timestamp: number;
  id: number;
  modifiedAt: string;
  createdAt: string;
  signedChangePrice: number;
  changeRate: number;
  signedChangeRate: number;
}

export interface ExchangeInfo {
  basePrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  openingPrice: number;
  ttBuyingPrice: number;
  ttSellingPrice: number;
  changePrice:number;
}