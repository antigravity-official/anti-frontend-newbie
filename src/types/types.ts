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

export interface IProductView {
  data?: IEurInfo;
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  exchangeEurToKrw: (krw: number) => number;
  priceComma: (num: number) => string;
}

export interface INumberInput {
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
}
