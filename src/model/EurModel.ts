import { EurInfo } from "../types/EurInfo";

class EurModel {
  eurData;

  constructor(eurData: EurInfo) {
    this.eurData = eurData;
  }
  getAllEurInfo() {
    return this.eurData;
  }

  getBasePrice() {
    return this.eurData.basePrice;
  }

  getIconForOpeningPriceComparison() {
    return this.eurData.basePrice - this.eurData.openingPrice > 0 ? "▲" : "▼";
  }

  getChangePrice() {
    return this.eurData.changePrice;
  }

  getChangeRate() {
    return (this.eurData.changePrice / this.eurData.basePrice) * 100;
  }

  getBuyingAndSellingPriceGroup() {
    const cashBuyingPrice = this.eurData.cashBuyingPrice;
    const cashSellingPrice = this.eurData.cashSellingPrice;
    const ttBuyingPrice = this.eurData.ttBuyingPrice;
    const ttSellingPrice = this.eurData.ttSellingPrice;
    return { cashBuyingPrice, cashSellingPrice, ttBuyingPrice, ttSellingPrice };
  }

  getExchangeEurToKrw(eur: number) {
    return eur * this.eurData.basePrice;
  }
}

export default EurModel;
