import { CurrencyCode } from "./Currency";
import { CurrencyFormat } from "./CurrencyFormat";
import CurrencyFormatRepository from "./CurrencyFormatRepository";
import TextCurrencyFormatModel from "./TextCurrencyFormatModel";

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

describe("TextCurrencyFormatModel", () => {
  const model = new TextCurrencyFormatModel(new MockCurrencyFormatRepository());

  test("before getFormat(), format is undefined", () => {
    expect(model.format).toBeUndefined();
  });

  test("after getFormat(), format won't be undefined", () => {
    model.getFormat("KRW");
    expect(model.format).not.toBeUndefined();
  });

  test(`comma will be added every ${mockCurrencyFormat.commaPosition} digits & show ${mockCurrencyFormat.decimalPlace} decimal place`, () => {
    expect(model.formatter("1234.56")).toBe("1,234.5");
  });
});
