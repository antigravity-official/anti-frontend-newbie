import Model from '../model/Model';
import GetEuroViewModel from './GetEuroViewModel';

export default class ViewModel {
  _euroInfo: Model | undefined;

  constructor(public euroInfo?: Model) {
    this._euroInfo = euroInfo ?? {
      basePrice: 0,
      openingPrice: 0,
      changePrice: 0,
      cashBuyingPrice: 0,
      cashSellingPrice: 0,
      ttSellingPrice: 0,
      ttBuyingPrice: 0,
    };
  }

  public async getEurInfo() {
    const krweur = await fetch(
      'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR'
    )
      .then((response) => response.json())
      .then((array) => array[0]);

    this._euroInfo = new GetEuroViewModel(krweur);
  }
}
