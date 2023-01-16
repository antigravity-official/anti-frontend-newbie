export const addComma = (number: number) => {
  return number.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });
};

export const unComma = (string: string) => {
  return Number(string.replaceAll(",", ""));
};
