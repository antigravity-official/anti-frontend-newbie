import { MoneyInfo, ResponseMoneyInfo } from "../lib/types";
import { ApiModel } from "./ApiModel";

export class MoneyInfoModel {
  constructor(private model: ApiModel) {}

  async getMoneyInfo(): Promise<MoneyInfo> {
    const responseMoneyInfo: ResponseMoneyInfo =
      await this.model.fetchEurInfo();

    return {
      basePrice: responseMoneyInfo.basePrice,
      cashBuyingPrice: responseMoneyInfo.cashBuyingPrice,
      cashSellingPrice: responseMoneyInfo.cashSellingPrice,
      changePrice: responseMoneyInfo.changePrice,
      openingPrice: responseMoneyInfo.openingPrice,
      ttBuyingPrice: responseMoneyInfo.ttBuyingPrice,
      ttSellingPrice: responseMoneyInfo.ttSellingPrice,
    };
  }
}
