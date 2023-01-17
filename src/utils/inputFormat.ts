const inputFormat = (e: React.KeyboardEvent<HTMLInputElement>) => {
  e.currentTarget.value = e.currentTarget.value.replace(/[^-\.0-9]/g, "");
  const countNumberThree = new RegExp(/(-?\d+)(\d{3})/);
  const pointIdx = e.currentTarget.value.indexOf(".", 0);
  const splitPoint = e.currentTarget.value.split(".");

  while (countNumberThree.test(splitPoint[0])) {
    splitPoint[0] = splitPoint[0].replace(countNumberThree, "$1,$2");
  }

  if (pointIdx > -1) {
    e.currentTarget.value = splitPoint[0] + "." + splitPoint[1].substring(0, 2);
  } else {
    e.currentTarget.value = splitPoint[0];
  }
};

export default inputFormat;
