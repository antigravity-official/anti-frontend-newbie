import Model from '../model/Model';
import ViewModelEuroInfo from '../types/ViewModelEuroInfo';
import addComma from '../utils/addComma';
import transformInt from '../utils/transformInt';

export default class ViewModel {
  euroInfo: ViewModelEuroInfo;

  constructor(public model: Model) {
    this.euroInfo = {
      basePrice: model.basePrice,
      basePriceStr: addComma(transformInt(model.basePrice)),
      openingPrice: model.openingPrice,
      changePrice: addComma(model.changePrice),
      cashBuyingPrice: addComma(transformInt(model.cashBuyingPrice)),
      cashSellingPrice: addComma(transformInt(model.cashSellingPrice)),
      ttSellingPrice: addComma(transformInt(model.ttSellingPrice)),
      ttBuyingPrice: addComma(transformInt(model.ttBuyingPrice)),
      fluctuationPrice: model.basePrice - model.openingPrice,
      changePercent: ((model.changePrice / model.basePrice) * 100).toFixed(2),
    };
  }

  writeEuroInput(value: string, prev: string): string {
    const regex = /^[0-9.]*$/;
    if (!regex.test(value)) return prev;
    if (value?.includes('.')) {
      value = value.split('.')[0] + '.' + value.split('.')[1].slice(0, 2);
    }
    return value;
  }

  exchangeEurToKrw(
    krw: string,
    euroInfo: ViewModelEuroInfo | undefined
  ): string {
    if (!!euroInfo) {
      return addComma(Math.floor(Number(krw) * euroInfo.basePrice));
    } else {
      return this.euroInfo.basePriceStr;
    }
  }
}
