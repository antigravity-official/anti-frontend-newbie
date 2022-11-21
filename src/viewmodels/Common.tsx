import { ApiExchangeContents, Func1, ArrowType, Func } from "../types/Type";

export const changKR = (e: number): string => {
  const krMoney = parseFloat(e.toFixed(2)).toLocaleString("kr-KR");
  return krMoney;
};

export const exchangeEurToKrw = (krw: number, data: ApiExchangeContents) =>
  krw * data.basePrice;

export const Arrow: ArrowType = (data) => {
  if (
    typeof data?.basePrice === "number" &&
    typeof data?.openingPrice === "number"
  ) {
    return data.basePrice - data.openingPrice;
  }
};

export const isFloat: Func1 = (data, func): void => {
  if (data.indexOf(".")) {
    func(data);
  } else if (!data.indexOf(".")) {
    alert("소수점은 입력이 불가능합니다");
  }
};

// export const onChanageInput = (
//   e: React.ChangeEvent<HTMLInputElement>,
//   func: Func
// ) => {
//   isFloat(e.target.value, func);
// };
