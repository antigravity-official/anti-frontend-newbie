export const exchangeEurToKrw = (eur: number, basePrice: number): string => {
  return Number(Math.floor(eur * basePrice)).toLocaleString();
};
