export const exchangeEurToKrw = (eur: number, basePrice: number) => eur * basePrice;

export const isLimitDecimal = ( input: string) => {
  if(input.includes('.') && input.split('.')[1].length > 2) return true;
  return false;
}