import ExchangeModel from '../models/krwEurModel';

class KrwEurViewModel {
  model: ExchangeModel;

  constructor(model: ExchangeModel) {
    this.model = model;
  }

  async getEurInfos() {
    return await this.model.getEurInfos();
  }
}

export default KrwEurViewModel;
