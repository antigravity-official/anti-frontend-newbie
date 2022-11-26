export interface EurStateType {
  basePrice: number;
  openingPrice: number;
  changePrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  ttSellingPrice: number;
  ttBuyingPrice: number;
}

export interface CalculatorType {
  exchange: (euro: string, basePrice: number) => void;
  eurToKrw: number;
  basePrice: number;
}
