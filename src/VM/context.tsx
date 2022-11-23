import { PriceInfo } from "../type/page";

export class DetailModel {
  cashBuyingPrice: number;
  cashSellingPrice: number;
  ttSellingPrice: number;
  ttBuyingPrice: number;

  constructor(data: PriceInfo | undefined) {
    this.cashBuyingPrice = data?.cashBuyingPrice
      ? Math.ceil(data?.cashBuyingPrice)
      : 0;
    this.cashSellingPrice = data?.cashSellingPrice
      ? Math.ceil(data?.cashSellingPrice)
      : 0;
    this.ttBuyingPrice = data?.ttBuyingPrice
      ? Math.ceil(data?.ttBuyingPrice)
      : 0;
    this.ttSellingPrice = data?.ttSellingPrice
      ? Math.ceil(data?.ttSellingPrice)
      : 0;
  }
}

export class InfoModel {
  basePrice: number;
  openingPrice: number;
  changePrice: number;

  constructor(data: PriceInfo | undefined) {
    this.basePrice = data?.basePrice ? Math.ceil(data?.basePrice) : 0;
    this.openingPrice = data?.openingPrice ? Math.ceil(data?.openingPrice) : 0;
    this.changePrice = data?.changePrice ? Math.ceil(data?.changePrice) : 0;
  }

  updown() {
    return this.basePrice - this.openingPrice > 0 ? "▲" : "▼";
  }

  percent() {
    return `${((this.changePrice / this.basePrice) * 100).toFixed(2)}%`;
  }
}
