export interface ApiExchangeContents {
  basePrice: number;
  openingPrice: number;
  changePrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  ttSellingPrice: number;
  ttBuyingPrice: number;
  change?: string;
  provider?: string;
  modifiedAt?: string;
}
export type TextContents = {
  children: string | React.ReactNode;
};

export interface Boolean {
  Boolean: boolean;
}

export interface ApiExchange {
  data: ApiExchangeContents;
  boolean: boolean;
}

export type Func = (a: string) => void;

export type Func1 = (data: string, func: Func) => void;
export type ArrowType = (a: ApiExchangeContents) => number | undefined;

export type InputKR = (e: React.ChangeEvent<HTMLInputElement>) => {};
