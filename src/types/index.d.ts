export type TCurrency = {
  basePrice:number
  cashBuyingPrice:number
  cashSellingPrice:string
  changePrice: number
  changeRate: number
  code: string
  country: string
  createdAt: string
  currencyCode: string
  currencyName: string
  currencyUnit: number
  date: string
  exchangeCommission: number
  fcSellingPrice: null
  high52wDate: string
  high52wPrice: number
  highPrice: number
  id: number
  low52wDate: string
  low52wPrice: number
  lowPrice: number
  modifiedAt: string
  name: string
  openingPrice: number
  provider: string
  recurrenceCount: number
  signedChangePrice: number
  signedChangeRate: number
  tcBuyingPrice: null
  time: string
  timestamp: number
  ttBuyingPrice: number
  ttSellingPrice: number
  usDollarRate: number
}
export interface IViewModel {
  info: TCurrency;
  input: number;
  output: number;
  getCurrency: (value: number, basePrice: number) => number;
  calOut: (val: string) => string;
}

export type TDashBoard = {
  basePrice: number;
  changePrice: number;
  openingPrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: string;
  ttSellingPrice: number;
  ttBuyingPrice: number;
}