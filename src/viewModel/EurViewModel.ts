import { EurModel } from "../types/EurModel";

class EurViewModel {
  model: EurModel;
  constructor(model: EurModel) {
    this.model = model;
  }

  getAllEurInfo() {
    return this.model.getAllEurInfo();
  }
  getBasePrice() {
    return this.model.getBasePrice();
  }

  getIconForOpeningPriceComparison() {
    return this.model.getIconForOpeningPriceComparison();
  }

  getChangePrice() {
    return this.model.getChangePrice();
  }

  getChangeRate() {
    return this.model.getChangeRate();
  }

  getBuyingAndSellingPriceGroup() {
    return this.model.getBuyingAndSellingPriceGroup();
  }

  getExchangeEurToKrw(eur: string, length: number) {
    return this.model.getExchangeEurToKrw(eur, length);
  }

  getToLocaleString(value: string) {
    return this.model.getToLocaleString(value);
  }
}

export default EurViewModel;
