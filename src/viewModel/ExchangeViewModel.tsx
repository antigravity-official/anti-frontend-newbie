import { ExchangeInfo, ExchangeModel } from "interfaces/Exchange";

export default class ExchangeViewModel {
  model: ExchangeModel;

  constructor(model: ExchangeModel) {
    this.model = model;
  }

  set(newData: ExchangeInfo) {
    this.model.set(newData);
  }

  async update() {
    this.model.set(await this.model.update());
  }

  getAll(): ExchangeInfo {
    return this.model.getAll();
  }

  exchange(money: number): number {
    return money * this.model.getAll().basePrice;
  }
};
