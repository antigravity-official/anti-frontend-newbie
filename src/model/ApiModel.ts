import { API_DELAY_TIME } from "../lib/contants";
import { delay } from "../lib/delay";
import { ResponseMoneyInfo } from "../lib/types";

export class ApiModel {
  private url: string

  constructor() {
    this.url = "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR";
  }

  async fetchEurInfo(): Promise<ResponseMoneyInfo> {
    const response = await fetch(this.url);

    const dataList: ResponseMoneyInfo[] = await response.json();
    const krweur: ResponseMoneyInfo = dataList[0];

    await delay(API_DELAY_TIME);

    return krweur;
  }
}
