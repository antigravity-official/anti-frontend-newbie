export interface EuroInfo {
  basePrice: number;
  openingPrice: number;
  changePrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  ttSellingPrice: number;
  ttBuyingPrice: number;
}

export interface EuroInfoProps {
  euroInfo: EuroInfo;
}

export interface ConvertEuroToKrwProps {
  exchangeEuroToKrw(krw: number): number;
  exchangeInput(e: React.ChangeEvent<HTMLInputElement>): number;
  onChangeExchangeValue(value: number): void;
  exchange: number;
}

export interface LoadingProps {
  isFetching: Promise<boolean>;
}
