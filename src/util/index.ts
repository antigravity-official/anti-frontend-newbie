export const exchangeEurToKrw = (eur: string, basePrice: number) => {
  if (eur === '') return '0';
  return Math.ceil(Number(eur) * basePrice).toLocaleString('ko-KR');
};

export const isLimitDecimal = (input: string) => {
  if (input.includes('.') && input.split('.')[1].length > 2) return true;
  return false;
};
