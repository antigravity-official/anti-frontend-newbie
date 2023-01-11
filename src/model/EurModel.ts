import { EurInfo } from "../types/EurInfo";

class EurModel {
  eurData: EurInfo;

  constructor(eurData: EurInfo) {
    this.eurData = eurData;
  }

  getBasePrice() {
    return this.eurData.basePrice;
  }

  getIconForOpeningPriceComparison() {
    return this.eurData.basePrice - this.eurData.openingPrice > 0 ? "🔼" : "🔽";
  }

  getChangePrice() {
    return this.eurData.changePrice;
  }

  getChangeRate() {
    return ((this.eurData.changePrice / this.eurData.basePrice) * 100).toFixed(
      3
    );
  }

  getTransactionPriceGroup() {
    const cashBuyingPrice = this.eurData.cashBuyingPrice;
    const cashSellingPrice = this.eurData.cashSellingPrice;
    const ttBuyingPrice = this.eurData.ttBuyingPrice;
    const ttSellingPrice = this.eurData.ttSellingPrice;
    return [
      { name: "살 때", price: cashBuyingPrice.toFixed(2) },
      { name: "팔 때", price: cashSellingPrice.toFixed(2) },
      { name: "받을 때", price: ttBuyingPrice.toFixed(2) },
      { name: "보낼 때", price: ttSellingPrice.toFixed(2) },
    ];
  }

  getExchangeEurToKrw(eur: string, length: number) {
    const option = { maximumFractionDigits: length };
    const removedCommaEur = eur.replaceAll(",", "");
    const eurToKrw = Number(removedCommaEur) * this.eurData.basePrice;
    const result = eurToKrw.toLocaleString("ko-KR", option);
    return result;
  }

  getToLocaleString(value: string) {
    const removedCommaValue = value.replaceAll(",", "");
    const result = Number(removedCommaValue).toLocaleString("ko-KR");
    return result;
  }
}

export default EurModel;
