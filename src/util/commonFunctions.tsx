export const exchangeEurToKrw = (eur: number, basePrice: number) => {
  return eur * basePrice;
};

export const krwInputValue = (eurInputValue: string, basePrice: number) => {
  const notComma = eurInputValue.split(',').join('');
  return Math.trunc(
    exchangeEurToKrw(Number(notComma), basePrice)
  ).toLocaleString();
};

export const commaEveryThreeDigits = (userInputValue: Array<string>) =>
  userInputValue.map((number: string, idx: number) => {
    if (idx === 0) {
      return Number(number.replace(/[^0-9]/g, '')).toLocaleString();
    }
    if (idx === 1) {
      return number.slice(0, 2);
    }
  });
