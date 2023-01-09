import { EurModel } from "../types/EurModel";

class EurViewModel {
  model;
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

  getExchangeEurToKrw(eur: number) {
    return this.model.getExchangeEurToKrw(eur);
  }
}

export default EurViewModel;
