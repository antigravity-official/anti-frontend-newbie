import ReplaceDigitNumber from "../../utils/ReplaceDigitNumber";

test("3 자리 수 , 찍기", () => {
  expect("1,000").toEqual(ReplaceDigitNumber("1000"));
  expect("1,000,000").toEqual(ReplaceDigitNumber("1000000"));
  expect("1,000,000,000").toEqual(ReplaceDigitNumber("1000000000"));
});
