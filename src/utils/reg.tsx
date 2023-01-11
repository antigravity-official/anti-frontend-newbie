export const fromCurrencyRegTest = (value: string): boolean => {
  const regex = /^[\d]*\.?[\d]{0,2}$/;
  return regex.test(value);
};
