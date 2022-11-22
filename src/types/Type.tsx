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
  children?: string | React.ReactNode;
};

export interface Boolean {
  Boolean: boolean;
}
export interface InputType {
  data?: ApiExchangeContents;
  onChangeExchange: State;
}
export interface ArrowChecktype {
  [x: string]: { ArrowCheck: ArrowType };
}

export interface ApiExchange {
  data: ApiExchangeContents;
  ischange: boolean;
}
export interface PropsData {
  data: ApiExchangeContents;
  isChange: boolean;
  onChangeExchange: State1;
  ChangeEuro: State | string;
  ArrowCheck: any;
}
// export type state = () => void
export type State = (a: string | boolean) => void;
export type State1 = (a: React.ChangeEvent<HTMLInputElement>) => void;
export type ChangeElement = (el: React.ChangeEvent<HTMLInputElement>) => void;
export type DataFunc = (data: string, func: State) => void;
export type ConvertNumber = (price: string) => number;
export type ArrowType = (a: ApiExchangeContents) => number | undefined;
export type InputKR = (e: React.ChangeEvent<HTMLInputElement>) => {};
// export type
