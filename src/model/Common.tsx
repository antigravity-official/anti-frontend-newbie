import {
  ApiExchangeContents,
  DataFunc,
  ArrowType,
  ConvertNumber,
  State,
} from "../types/Type";

//환율 계산
export const changKR = (e: number): string => {
  const krMoney = parseFloat(e.toFixed(2)).toLocaleString("kr-KR");
  return krMoney;
};

// 원화 환율 계산
export const exchangeEurToKrw = (
  krw: number,
  data: ApiExchangeContents
): number => krw * data.basePrice;

//환율 금액
export const Arrow: ArrowType = (data) => {
  if (
    typeof data?.basePrice === "number" &&
    typeof data?.openingPrice === "number"
  ) {
    return data.basePrice - data.openingPrice;
  }
};

export const isFloat: DataFunc = (data, func): void => {
  if (data.indexOf(".")) {
    func(data);
  } else if (!data.indexOf(".")) {
    alert("소수점은 입력이 불가능합니다");
  }
};

// // 소수점 자리 입력 방지
const convertNumber = (price: string) => {
  return String(price).replace(/[^0-9]/g, "");
};
// export const onChangeEuro = (e: any, Func: any) => {
//   const convertedNumber = convertNumber(e);
//   Func(convertedNumber);
// };
export const onChangeEuro = (
  el: React.ChangeEvent<HTMLInputElement>,
  Func: State
) => {
  const convertedNumber = convertNumber(String(el));
  Func(convertedNumber);
};
