import ExchangeModel from '../models/krwEurModel';
import { EurTypes, KrwTypes } from '../interfaces/exchange';

class KrwEurViewModel {
  model: ExchangeModel;

  constructor(model: ExchangeModel) {
    this.model = model;
  }

  getEurInfos() {
    return this.model.getEurInfos();
  }

  calcEurToKrw(eur: EurTypes): KrwTypes {
    return this.model.calcEurToKrw(eur);
  }

  checkEur(eur: EurTypes) {
    return this.model.checkEur(eur);
  }
}

export default KrwEurViewModel;
