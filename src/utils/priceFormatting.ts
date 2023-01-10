export const priceStringFormat = (targetPrice: number): string =>
  targetPrice.toLocaleString('ko-KR', {
    maximumFractionDigits: 0,
  });
