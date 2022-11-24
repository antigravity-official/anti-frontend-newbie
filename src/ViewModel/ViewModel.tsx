import Model from '../Model/Model';

export default class ViewModel {
  private model: Model;

  constructor(model: Model) {
    this.model = model;
  }

  getAllEurInfo() {
    const { eurInfo, eur, krw } = this.model.getEruInfo();
    const changeRate = (eurInfo.changeRate * 100).toFixed(2);

    Object.keys(eurInfo).forEach((price) => {
      if (typeof eurInfo[price] === 'number' && price !== 'changeRate') {
        eurInfo[price] = Math.floor(eurInfo[price]);
      }
    });

    const updownMark = eurInfo.basePrice - eurInfo.openingPrice > 0 ? '▲' : '▼';

    return { eurInfo, changeRate, updownMark, eur, krw };
  }

  exchangeEurToKrw = (krw: number, basePrice: number) =>
    Math.floor(krw * basePrice);

  onChange(value: string, basePrice: number) {
    if (!/^\d*.?\d{0,2}$/.test(value)) return;
    else this.model.setEurState(value);

    this.model.setKrwState(this.exchangeEurToKrw(Number(value), basePrice));
  }
}
