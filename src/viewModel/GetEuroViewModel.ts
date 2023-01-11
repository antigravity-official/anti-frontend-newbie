import EuroInfoTypes from '../types/EuroInfoTypes';

export default class GetEuroViewModel {
  basePrice: number;
  openingPrice: number;
  changePrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  ttSellingPrice: number;
  ttBuyingPrice: number;

  constructor(euroInfo: EuroInfoTypes) {
    this.basePrice = euroInfo.basePrice;
    this.openingPrice = euroInfo.openingPrice;
    this.changePrice = euroInfo.changePrice;
    this.cashBuyingPrice = euroInfo.cashBuyingPrice;
    this.cashSellingPrice = euroInfo.cashSellingPrice;
    this.ttSellingPrice = euroInfo.ttSellingPrice;
    this.ttBuyingPrice = euroInfo.ttBuyingPrice;
  }
}
