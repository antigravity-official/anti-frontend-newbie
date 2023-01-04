import { CurrencyCode } from "../currency";
import ExchangeInfo from "./ExchangeInfo";
import ExchangeInfoModel from "./ExchangeInfoModel";
import ExchangeInfoRepository from "./ExchangeInfoRepository";

export const mockExchangeInfo: ExchangeInfo = {
  basePrice: 1000,
  openingPrice: 1000,
  changePrice: 1000,
  cashSellingPrice: 1000,
  cashBuyingPrice: 1000,
  ttSellingPrice: 1000,
  ttBuyingPrice: 1000,
};

export class MockExchangeInfoRepository implements ExchangeInfoRepository {
  async get(
    fromCountry: CurrencyCode,
    toCountry: CurrencyCode
  ): Promise<ExchangeInfo> {
    return mockExchangeInfo;
  }
}

describe("ExchangeInfoModel", () => {
  const model = new ExchangeInfoModel(new MockExchangeInfoRepository());

  test("before get(), info is undefined", () => {
    expect(model.info).toBeUndefined();
  });

  test("after get(), info is not undefined", async () => {
    await model.get("EUR", "KRW");
    expect(model.info).not.toBeUndefined();
  });

  let amount = 1000;
  test(`${amount} * ${mockExchangeInfo.basePrice} =`, () => {
    expect(model.exchange(amount)).toBe(amount * mockExchangeInfo.basePrice);
  });
});
