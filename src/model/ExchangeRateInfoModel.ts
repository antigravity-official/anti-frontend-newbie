import { EuroInfo } from "../types/type";

export class ExchangeRateInfoModel {
  info?: EuroInfo;
  constructor() {}

  async getKrwEurData(): Promise<EuroInfo> {
    const krweur = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
      .then((response) => response.json())
      .then((array) => array[0]);
    this.info = krweur;
    return krweur;
  }
}
