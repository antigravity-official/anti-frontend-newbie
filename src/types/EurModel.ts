export interface EurModel {
  getBasePrice(): number;
  getIconForOpeningPriceComparison(): string;
  getChangePrice(): number;
  getChangeRate(): number;
  getBuyingAndSellingPriceGroup(): { name: string; price: number }[];
  getExchangeEurToKrw(eur: string, length: number): string;
  getToLocaleString(value: string): string;
}
