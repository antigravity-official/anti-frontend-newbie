export const exchangeEurToKrw = (from: string, basePrice: number): string => {
  return Math.floor(Number(from) * basePrice).toLocaleString();
};
