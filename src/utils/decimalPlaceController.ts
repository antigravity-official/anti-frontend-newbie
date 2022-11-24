const decimalPlaceController = (num: string): string => {
  const regex = /([0-9]*[\.|\,]{0,1}[0-9]{0,2})/s;
  return num.match(regex)![0];
};

export default decimalPlaceController;
