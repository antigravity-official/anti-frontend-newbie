export const exchangeEurToKrw = (eur: number, eurInfo: any) => {
  const num = eur * eurInfo.basePrice;
  return num.toLocaleString('ko-KR', {
    maximumFractionDigits: 0,
  });
};
