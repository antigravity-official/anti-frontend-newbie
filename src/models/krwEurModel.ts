import { KrwEurInfosTypes } from '../interfaces/exchange';
import { EurTypes, KrwTypes } from '../interfaces/exchange';

class KrwEurModel {
  krwEurInfos: KrwEurInfosTypes[];

  constructor(krwEurInfos: KrwEurInfosTypes[]) {
    this.krwEurInfos = krwEurInfos;
  }

  getEurInfos() {
    return this.krwEurInfos[0];
  }

  calcEurToKrw(eur: EurTypes): KrwTypes {
    const calcedEurToKrw = eur * this.krwEurInfos[0].basePrice;
    const result = Math.floor(calcedEurToKrw).toLocaleString();
    return result as unknown as KrwTypes;
  }

  checkEur(eur: EurTypes): boolean {
    let regexp = /(^\d+$)|(^\d{1,}.\d{1,2}$)/;
    if (!regexp.test(eur as unknown as string)) return false;
    else return true;
  }
}

export default KrwEurModel;
