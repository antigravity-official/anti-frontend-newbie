interface ExchangeInfo {
  basePrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  changePrice: number;
  openingPrice: number;
  ttBuyingPrice: number;
  ttSellingPrice: number;
};

interface ExchangeModel {
  exinfo: ExchangeInfo;
  set(newData: ExchangeInfo): void;
  update(): Promise<ExchangeInfo>;
  getAll(): ExchangeInfo;
};

export { ExchangeInfo, ExchangeModel };