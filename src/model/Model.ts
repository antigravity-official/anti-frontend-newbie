import ModelEuroInfo from '../types/ModelEuroInfo';

export default class Model {
  basePrice: number;
  openingPrice: number;
  changePrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  ttSellingPrice: number;
  ttBuyingPrice: number;

  constructor(public data: ModelEuroInfo | undefined) {
    this.basePrice = data?.basePrice || 0;
    this.openingPrice = data?.openingPrice || 0;
    this.changePrice = data?.changePrice || 0;
    this.cashBuyingPrice = data?.cashBuyingPrice || 0;
    this.cashSellingPrice = data?.cashSellingPrice || 0;
    this.ttSellingPrice = data?.ttSellingPrice || 0;
    this.ttBuyingPrice = data?.ttBuyingPrice || 0;
  }
}
