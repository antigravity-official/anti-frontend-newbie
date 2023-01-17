export const PointValidation = (inputData: string) => {
  const pattern = /(^\d+$)|(^\d+\.\d{0,2}$)/;
  if (pattern.test(inputData)) return inputData;
};

export const DeletePoint = (input: string) => {
  const pattern = /(^\d+$)|(^\d+\.\d{0,2}$)/;
  if (pattern.test(input)) return input.substring(0, input.length - 1);
};
