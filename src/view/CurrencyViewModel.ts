import { TCurrency } from './../types/index.d';
import { exchangeEurToKrw, isLimitDecimal } from '../util';

class CurrencyViewModel {
  info: TCurrency;
  value: string;

  constructor(data: TCurrency,){
    this.info = data
    this.value = ''
  }

  getCurrency(value: string) {
    return exchangeEurToKrw(value, this.info.basePrice);
  }
  
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let input = e.target.value;
    if(isLimitDecimal(input)) return;
    this.value = e.target.value;
  }

}

export default CurrencyViewModel