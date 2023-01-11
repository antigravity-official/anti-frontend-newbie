import { eurInfoType } from "../types/types";

export const exchangeEurToKrw = (krw: number, eurInfo: eurInfoType): string =>
  (krw * eurInfo.basePrice!).toLocaleString("ko-kr");

export const onChangeInput = (
  e: React.ChangeEvent<HTMLInputElement>,
  setInputValue: React.Dispatch<React.SetStateAction<number>>
): void => {
  e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
  if (e.target.value.includes(".")) {
    let idx = e.target.value.indexOf(".");
    let length = e.target.value.slice(idx + 1).length;
    if (length > 2) {
      e.target.value = (
        Math.floor(Number(e.target.value) * 100) / 100
      ).toString();
    }
  }
  setInputValue(Number(e.target.value));
};
