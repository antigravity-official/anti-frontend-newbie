export const getFormattedNumber = (value: number, maximumFractionDigits: number = 0): string => {
  return value.toLocaleString(undefined, { maximumFractionDigits });
};

export const removeCommaFromString = (str: string) => {
  const removeComma = Array.from(str).filter((element) => element !== ",");
  return removeComma.join("");
};
