import { TCurrency } from './../types/index.d';
import { exchangeEurToKrw } from '../util';

class CurrencyViewModel {
  info: TCurrency;
  input: number;
  output: number;

  constructor(data: TCurrency,){
    this.info = data
    this.input = 0
    this.output = 0
  }

  getCurrency(value: number, basePrice: number) {
    return exchangeEurToKrw(value, basePrice);
  }
  
  calOut(value: string) {
    return Math.ceil(Number(value) * this.info.basePrice).toLocaleString('ko-KR');
  }
  
}

export default CurrencyViewModel