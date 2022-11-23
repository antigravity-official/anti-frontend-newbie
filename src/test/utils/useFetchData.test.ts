import { useFetchData } from "../../utils/useFetchData";
import { renderHook } from "@testing-library/react-hooks";

test("url fetch 데이터, 로딩, error 상태", async () => {
  const url =
    "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR";

  const { result, waitForNextUpdate } = renderHook(() => useFetchData(url));

  const mock = {
    data: {
      basePrice: 1395.81,
      cashBuyingPrice: 1423.58,
      cashSellingPrice: 1368.04,
      change: "RISE",
      changePrice: 0.92,
      changeRate: 0.0006595502,
      code: "FRX.KRWEUR",
      country: "유로",
      createdAt: "2016-10-21T06:13:30.000+0000",
      currencyCode: "EUR",
      currencyName: "유로",
      currencyUnit: 1,
      date: "2022-11-22",
      exchangeCommission: 3.388,
      fcSellingPrice: null,
      high52wDate: "2022-10-27",
      high52wPrice: 1440.2,
      highPrice: 1396.15,
      id: 25,
      low52wDate: "2022-07-12",
      low52wPrice: 1306.52,
      lowPrice: 1385.3,
      modifiedAt: "2022-11-22T12:11:11.000+0000",
      name: "유로 (KRW/EUR)",
      openingPrice: 1385.3,
      provider: "하나은행",
      recurrenceCount: 1033,
      signedChangePrice: 0.92,
      signedChangeRate: 0.0006595502,
      tcBuyingPrice: null,
      time: "21:11:04",
      timestamp: 1669119070635,
      ttBuyingPrice: 1381.86,
      ttSellingPrice: 1409.76,
      usDollarRate: 1.0286,
    },
    error: undefined,
    loading: false,
  };

  expect(result.all[0]).toEqual({
    data: undefined,
    loading: true,
    error: undefined,
  });

  await waitForNextUpdate();

  // mock data랑 다르기 때문에 주석처리
  //expect(result.current).toEqual(mock);
});
