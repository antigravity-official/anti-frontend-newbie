export default class Model {
  constructor(
    public basePrice: number,
    public openingPrice: number,
    public changePrice: number,
    public cashBuyingPrice: number,
    public cashSellingPrice: number,
    public ttSellingPrice: number,
    public ttBuyingPrice: number
  ) {}
}
