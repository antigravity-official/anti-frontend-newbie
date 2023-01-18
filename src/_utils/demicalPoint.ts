/**
 *
 * @name Floor(내림)
 *
 * @param num - 금액
 * @param unit - 소숫점 자리수
 * @returns 소숫점 자리수만큼 사라진 금액ㅇ
 */

export const floor = (num: number, unit: number) => {
  return Math.floor(num * 10 ** unit) / 10 ** unit;
};

/**
 * @name 소숫점 2자리까지만 입력했는지 확인
 */

export const isUnderTwoDemical = (str: string) => {
  if (str === "") return false;
  const pattern = /(^\d+$)|(^\d{1,}.\d{0,2}$)/;
  return !pattern.test(str);
};
