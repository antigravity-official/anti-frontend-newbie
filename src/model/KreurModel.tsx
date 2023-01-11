import { ExchangeInfo, ExchangeModel } from "interfaces/Exchange";

//원화와 유로화의 환율 모델입니다.
class KreurModel implements ExchangeModel {
  exinfo: ExchangeInfo;

  constructor() {
    this.exinfo = {
      basePrice: 1000,
      cashBuyingPrice: 1000,
      cashSellingPrice: 1000,
      changePrice: 1000,
      openingPrice: 1000,
      ttBuyingPrice: 1000,
      ttSellingPrice: 1000,
    }
  }

  set(newData: ExchangeInfo) {
    this.exinfo = newData;
  }

  async update(): Promise<ExchangeInfo> {
    // 환율정보를 업데이트합니다.
    return await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
      .then((response) => response.json())
      .then((array) => {
        return array[0];
      });
  }

  getAll(): ExchangeInfo {
    // 모든 환율정보를 리턴합니다.
    return this.exinfo;
  }
}

export default KreurModel;

