import { EuroInfo } from "../types/Euroinfo";

export const EuroInfoModel = {
  async getEuroInfo(): Promise<EuroInfo> {
    const getEurInfo = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
      .then((response) => response.json())
      .then((array) => array[0]);

    return getEurInfo;
  },
};
