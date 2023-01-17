// 빈 값을 확인해주는 함수
export const checkNull = (value: any) => {
  if (!!value) {
    return value;
  }
  return "-";
};

// 유로화 입력 포맷함수
export const getNumberToEur = (value: string) => {
  if (value.split(".").length > 2) {
    return;
  }
  let front = "",
    back = "";
  const numberArray = value.split(".");
  front = Number(numberArray[0]).toLocaleString(undefined).toString();
  if (numberArray.length > 1) {
    back = numberArray[1].substring(0, 2);
    return front + "." + back;
  } else {
    return front;
  }
};

// 금액에서 콤마제거해주는 함수
export const removeComma = (number: string) => {
  return number.replaceAll(",", "");
};
