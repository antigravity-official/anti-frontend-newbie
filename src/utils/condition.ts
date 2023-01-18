
export const marking = (n1: number) => Math.round(n1).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
export const Round = (n1: number) => n1.toFixed(2);
export const exchangeEurToKrw = (k: string, basePrice: number) => Math.round(Number(k) * basePrice);