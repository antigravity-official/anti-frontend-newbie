export const exchangeEurToKrw = (eur: number, basePrice: number) => {
  const num = eur * basePrice;
  return num.toLocaleString('ko-KR', {
    maximumFractionDigits: 0,
  });
};
