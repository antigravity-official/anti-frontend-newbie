export interface EurModel {
  getBasePrice(): number;
  getIconForOpeningPriceComparison(): string;
  getChangePrice(): number;
  getChangeRate(): string;
  getTransactionPriceGroup(): { name: string; price: string }[];
  getExchangeEurToKrw(eur: string, length: number): string;
  getToLocaleString(value: string): string;
}
