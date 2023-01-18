export const comma = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const deleteComma = (string: string) => {
  return parseFloat(string.replace(/,/g, ""));
};
