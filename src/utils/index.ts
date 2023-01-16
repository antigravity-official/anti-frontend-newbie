// 빈 값을 확인해주는 함수
export const NullCheck = (value: any) => {
  if (!!value) {
    return value;
  }
  return "-";
};
