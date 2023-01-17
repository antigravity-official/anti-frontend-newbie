export const PointValidation = (number: string) => {
  const pattern = /(^\d+$)|(^\d+\.\d{0,2}$)/;
  number = number.replace(/[^\d.]/g, "").replace(/(\..*)\./g, "$1");
  if (!pattern.test(number)) return number.substring(0, number.length - 1);
  return number;
};
