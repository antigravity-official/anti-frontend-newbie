export const currency = (eur: number, locale: string, maxDigits: number) => {
  const option = { maximumFractionDigits: maxDigits };
  return eur.toLocaleString(locale, option);
};

export const exchangeEurToKrw = (krw: number, eur: number) => krw * eur;
