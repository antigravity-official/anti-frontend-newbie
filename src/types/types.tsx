export interface ApiReturnInfoType {
  // 필수 데이터
  basePrice: number;
  openingPrice: number;
  changePrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  ttBuyingPrice: number;
  ttSellingPrice: number;
  // 필요 시 데이터
  code?: string;
  currencyCode?: string;
  currencyName?: string;
  country?: string;
  name?: string;
  date?: string;
  time?: string;
  recurrenceCount?: number;
  highPrice?: number;
  lowPrice?: number;
  change?: string;
  tcBuyingPrice?: null;
  fcSellingPrice?: null;
  exchangeCommission?: number;
  usDollarRate?: number;
  high52wPrice?: number;
  high52wDate?: string;
  low52wPrice?: number;
  low52wDate?: string;
  currencyUnit?: number;
  provider?: string;
  timestamp?: number;
  id?: number;
  createdAt?: string;
  modifiedAt?: string;
  changeRate?: number;
  signedChangePrice?: number;
  signedChangeRate?: number;
}

export interface PriceType {
  basePrice?: number;
  openingPrice?: number;
  changePrice?: number;
  cashBuyingPrice?: number;
  cashSellingPrice?: number;
  ttSellingPrice?: number;
  ttBuyingPrice?: number;
}

export interface JsxType {
  children: JSX.Element | JSX.Element[];
}
