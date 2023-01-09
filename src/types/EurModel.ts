import { EurInfo } from "./EurInfo";

export interface EurModel {
  getAllEurInfo(): EurInfo;
  getBasePrice(): number;
  getIconForOpeningPriceComparison(): string;
  getChangePrice(): number;
  getChangeRate(): number;
  getBuyingAndSellingPriceGroup(): { [key: string]: number };
  getExchangeEurToKrw(eur: number): number;
}
