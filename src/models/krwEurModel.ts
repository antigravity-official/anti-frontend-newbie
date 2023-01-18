import { getExchangeKrwEurInfosApi } from '../apis/exchangeApi';
import { KrwEurInfosTypes } from '../interfaces/exchange';

class KrwEurModel {
  krwEurInfos: KrwEurInfosTypes[];

  constructor(krwEurInfos: KrwEurInfosTypes[]) {
    this.krwEurInfos = krwEurInfos;
  }

  async getEurInfos() {
    return this.krwEurInfos[0];
  }
}

export default KrwEurModel;
