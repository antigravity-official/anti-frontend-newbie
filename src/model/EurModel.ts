import { EurInfo } from "../types/EurInfo";

class EurModel {
  eurData: EurInfo;

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
    return [
      { name: "살 때", price: cashBuyingPrice },
      { name: "팔 때", price: cashSellingPrice },
      { name: "받을 때", price: ttBuyingPrice },
      { name: "보낼 때", price: ttSellingPrice },
    ];
  }

  getExchangeEurToKrw(eur: number) {
    return eur * this.eurData.basePrice;
  }
}

export default EurModel;
