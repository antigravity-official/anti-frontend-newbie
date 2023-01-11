export interface EurModel {
  getBasePrice(): number;
  getIconForOpeningPriceComparison(): string;
  getChangePrice(): number;
  getChangeRate(): number;
  getTransactionPriceGroup(): { name: string; price: number }[];
  getExchangeEurToKrw(eur: string, length: number): string;
  getToLocaleString(value: string): string;
}
