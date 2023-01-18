/**
 * 환율정보 (하나은행 환율 API 결과값)
 */

export class ExchangeRateInfo {
  basePrice: number;
  openingPrice: number;
  changePrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  ttBuyingPrice: number;
  ttSellingPrice: number;

  constructor(
    basePrice: number = 0,
    openingPrice: number = 0,
    changePrice: number = 0,
    cashBuyingPrice: number = 0,
    cashSellingPrice: number = 0,
    ttBuyingPrice: number = 0,
    ttSellingPrice: number = 0
  ) {
    this.basePrice = basePrice;
    this.openingPrice = openingPrice;
    this.changePrice = changePrice;
    this.cashBuyingPrice = cashBuyingPrice;
    this.cashSellingPrice = cashSellingPrice;
    this.ttBuyingPrice = ttBuyingPrice;
    this.ttSellingPrice = ttSellingPrice;
  }
}

export async function getExchangeRateInfo(country: string): Promise<ExchangeRateInfo> {
  const result = await fetch(`https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRW${country}`)
    .then((response) => response.json())
    .then((array) => array[0]);

  return new ExchangeRateInfo(
    result.basePrice,
    result.openingPrice,
    result.changePrice,
    result.cashBuyingPrice,
    result.cashSellingPrice,
    result.ttBuyingPrice,
    result.ttSellingPrice
  );
}
