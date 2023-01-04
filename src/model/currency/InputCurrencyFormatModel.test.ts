import { CurrencyCode } from "./Currency";
import { CurrencyFormat } from "./CurrencyFormat";
import CurrencyFormatRepository from "./CurrencyFormatRepository";
import InputCurrencyFormatModel from "./InputCurrencyFormatModel";

const mockCurrencyFormat: CurrencyFormat = {
  commaPosition: 3,
  decimalPlace: 1,
  inKorean: "",
};

class MockCurrencyFormatRepository implements CurrencyFormatRepository {
  getFormat(code: CurrencyCode) {
    return mockCurrencyFormat;
  }
}

describe("using InputCurrencyFormatModel", () => {
  const model = new InputCurrencyFormatModel(
    new MockCurrencyFormatRepository()
  );

  test("before getFormat(), format is undefined", () => {
    expect(model.format).toBeUndefined();
  });

  test("after getFormat(), format won't be undefined", () => {
    model.getFormat("KRW");
    expect(model.format).not.toBeUndefined();
  });

  test("the value in input can't have comma", () => {
    expect(model.formatter("1234.56")).toBe("1234.5");
  });
});
