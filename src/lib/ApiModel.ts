import { API_DELAY_TIME } from "./contants";
import { delay } from "./delay";
import { MoneyInfo } from "./types";

export class ApiModel {
  static async fetchEurInfo(): Promise<MoneyInfo> {
    const response = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    );

    const dataList: MoneyInfo[] = await response.json();
    const krweur: MoneyInfo = dataList[0];

    await delay(API_DELAY_TIME);

    return krweur;
  }
}
