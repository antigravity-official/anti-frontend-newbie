export interface EurInfo {
  basePrice: number;
  openingPrice: number;
  changePrice: number;
  upDownIcon: number;
  changeRate: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  ttSellingPrice: number;
  ttBuyingPrice: number;
  [key: string]: number | string;
}
