import { PriceInfo } from "../type/page";

export class DetailModel {
  cashBuyingPrice: number;
  cashSellingPrice: number;
  ttSellingPrice: number;
  ttBuyingPrice: number;

  constructor(data: PriceInfo | undefined) {
    this.cashBuyingPrice = data?.cashBuyingPrice ? data?.cashBuyingPrice : 0;
    this.cashSellingPrice = data?.cashSellingPrice ? data?.cashSellingPrice : 0;
    this.ttBuyingPrice = data?.ttBuyingPrice ? data?.ttBuyingPrice : 0;
    this.ttSellingPrice = data?.ttSellingPrice ? data?.ttSellingPrice : 0;
  }
}

export class InfoModel {
  basePrice: number;
  openingPrice: number;
  changePrice: number;

  constructor(data: PriceInfo | undefined) {
    this.basePrice = data?.basePrice ? data?.basePrice : 0;
    this.openingPrice = data?.openingPrice ? data?.openingPrice : 0;
    this.changePrice = data?.changePrice ? data?.changePrice : 0;
  }

  updown() {
    return this.basePrice - this.openingPrice > 0 ? "▲" : "▼";
  }

  percent() {
    return `${(this.changePrice / this.basePrice) * 100}%`;
  }
}
