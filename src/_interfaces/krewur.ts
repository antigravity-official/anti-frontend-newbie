interface IKrewurItem {
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
  tcBuyingPrice: null;
  fcSellingPrice: null;
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
  signedChangeRate: number;
  changeRate: number;
}

export { IKrewurItem };
