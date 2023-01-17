export const getEurInfo = async (): Promise<KrweurType> => {
  try {
    const response = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    );

    if (!response.ok) {
      throw new Error("failed to fetch data");
    }
    const responseData = await response.json();
    const krweurData = responseData[0];
    return krweurData;
  } catch (error) {
    throw new Error("failed to fetch data");
  }
};

export interface KrweurType {
  code: string;
  currencyCode: string;
  currencyName: string;
  country: string;
  name: string;
  date: string;
  time: string;
  recurrenceCount: number;
  basePrice: number;
  openingPrice: number;
  highPrice: number;
  lowPrice: number;
  change: string;
  changePrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  ttBuyingPrice: number;
  ttSellingPrice: number;
  tcBuyingPrice: null;
  fcSellingPrice: null;
  exchangeCommission: number;
  usDollarRate: number;
  high52wPrice: number;
  high52wDate: string;
  low52wPrice: number;
  low52wDate: string;
  currencyUnit: number;
  provider: string;
  timestamp: number;
  id: number;
  modifiedAt: string;
  createdAt: string;
  changeRate: number;
  signedChangePrice: number;
  signedChangeRate: number;
}

export const intialState = {
  basePrice: 1339.63,
  cashBuyingPrice: 1366.28,
  cashSellingPrice: 1312.98,
  change: "FALL",
  changePrice: 5.58,
  changeRate: 0.0041480512,
  code: "FRX.KRWEUR",
  country: "유로",
  createdAt: "2016-10-21T06:13:30.000+0000",
  currencyCode: "EUR",
  currencyName: "유로",
  currencyUnit: 1,
  date: "2023-01-16",
  exchangeCommission: 3.883,
  fcSellingPrice: null,
  high52wDate: "2022-10-27",
  high52wPrice: 1440.2,
  highPrice: 1343.45,
  id: 25,
  low52wDate: "2022-07-12",
  low52wPrice: 1306.52,
  lowPrice: 1337.33,
  modifiedAt: "2023-01-16T05:24:34.000+0000",
  name: "유로 (KRW/EUR)",
  openingPrice: 1343.45,
  provider: "하나은행",
  recurrenceCount: 463,
  signedChangePrice: -5.58,
  signedChangeRate: -0.0041480512,
  tcBuyingPrice: null,
  time: "14:24:26",
  timestamp: 1673846674092,
  ttBuyingPrice: 1326.24,
  ttSellingPrice: 1353.02,
  usDollarRate: 1.0856,
};
