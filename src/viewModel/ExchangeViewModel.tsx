import { EurInfoProps } from "../@types/EurInfoProps";

export class exchangeViewModel {
  basePrice: number;
  openingPrice: number;
  changePrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  ttSellingPrice: number;
  ttBuyingPrice: number;

  constructor(eurInfo?: EurInfoProps) {
    this.basePrice = eurInfo?.basePrice ?? 0;
    this.openingPrice = eurInfo?.openingPrice ?? 0;
    this.changePrice = eurInfo?.changePrice ?? 0;
    this.cashBuyingPrice = eurInfo?.cashBuyingPrice ?? 0;
    this.cashSellingPrice = eurInfo?.cashSellingPrice ?? 0;
    this.ttSellingPrice = eurInfo?.ttSellingPrice ?? 0;
    this.ttBuyingPrice = eurInfo?.ttBuyingPrice ?? 0;
  }

  moneyState() {
    if (this.basePrice === this.openingPrice) return "-";
    return this.basePrice - this.openingPrice > 0 ? "▲" : "▼";
  }

  percent() {
    return `${((this.changePrice / this.basePrice) * 100).toFixed(2)}%`;
  }
}
