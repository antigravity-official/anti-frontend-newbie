export enum CommaPosition {
  tens = 1,
  hundreds = 2,
  thoudsands = 3,
}

export interface CurrencyFormat {
  commaPosition: CommaPosition;
  decimalPlace: number;
  inKorean: string;
}
