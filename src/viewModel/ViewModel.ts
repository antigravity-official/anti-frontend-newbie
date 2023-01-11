import EuroInfoTypes from '../types/EuroInfoTypes';
import GetEuroViewModel from './GetEuroViewModel';
import getEuroData from '../apis/getEuroData';

export default class ViewModel {
  _euroInfo: EuroInfoTypes | undefined;

  constructor(public euroInfo?: EuroInfoTypes) {
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
    const data = await getEuroData();

    this._euroInfo = new GetEuroViewModel(data);
  }
}
