import Model from '../Model/Model';

export default class ViewModel {
  private model: Model;
  constructor(model: Model) {
    this.model = model;
  }

  getEurInfo() {
    return this.model.getAllEruInfo();
  }

  exchangeEurToKrw = (krw: number, basePrice: number) =>
    Math.floor(krw * basePrice);

  onChange(value: string, basePrice: number) {
    if (!/^\d*.?\d{0,2}$/.test(value)) return;
    else this.model.setEurState(value);

    this.model.setKrwState(this.exchangeEurToKrw(Number(value), basePrice));
  }
}
