import { getFormattedNumber, removeCommaFromString } from "../utils/Util";

describe("환율 계산", () => {
  it("입력값이 세 자리 이하인 경우", () => {
    const inputPrice = "12";
    const basePrice = 1335.17;
    const expected = ["12", "16,022"];
    expect(exchangeToKrw(inputPrice, basePrice)).toStrictEqual(expected);
  });
  it("입력값이 네 자리 이상인 경우", () => {
    const inputPrice = "1234";
    const basePrice = 1335.17;
    const expected = ["1,234", "1,647,600"];
    expect(exchangeToKrw(inputPrice, basePrice)).toStrictEqual(expected);
  });
  it("입력값에 소수점이 포함되고 세 자리 이하인 경우", () => {
    const inputPrice = "12.34";
    const basePrice = 1335.17;
    const expected = ["12.34", "16,476"];
    expect(exchangeToKrw(inputPrice, basePrice)).toStrictEqual(expected);
  });
  it("입력값에 소수점이 포함되고 네 자리 이상인 경우", () => {
    const inputPrice = "1234.5";
    const basePrice = 1335.17;
    const expected = ["1,234.5", "1,648,267"];
    expect(exchangeToKrw(inputPrice, basePrice)).toStrictEqual(expected);
  });
  it("입력값에 .을 제외한 문자가 포함된 경우", () => {
    const inputPrice = "1234.5문";
    const basePrice = 1335.17;
    const expected = false;
    expect(exchangeToKrw(inputPrice, basePrice)).toStrictEqual(expected);
  });
  it("입력값에 끝에 .이 있는 경우", () => {
    const inputPrice = "1234.";
    const basePrice = 1335.17;
    const expected = ["1,234.", "1,647,600"];
    expect(exchangeToKrw(inputPrice, basePrice)).toStrictEqual(expected);
  });
});

const exchangeToKrw = (inputPrice: string, basePrice: number) => {
  const removeComma = removeCommaFromString(inputPrice);
  let isHaveDot = false;
  if (removeComma[removeComma.length - 1] === ".") isHaveDot = true;
  if (Number(removeComma)) {
    const inputPriceToNumber = Number(removeComma);
    const krw = inputPriceToNumber * basePrice;
    const input = `${getFormattedNumber(inputPriceToNumber, 2)}${isHaveDot ? "." : ""}`;
    const result = getFormattedNumber(krw, 0);
    return [input, result];
  }
  return false;
};
