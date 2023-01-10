// api로 받아오는 데이터의 필요 타입과 옵셔널 타입 지정
export interface EurInfoTypes {
  props: {
    // 사용 데이터
    basePrice: number;
    openingPrice: number;
    changePrice: number;
    cashBuyingPrice: number;
    cashSellingPrice: number;
    ttBuyingPrice: number;
    ttSellingPrice: number;
    // 옵셔널 데이터
    code?: string;
    currencyCode?: string;
    currencyName?: string;
    country?: string;
    name?: string;
    date?: string;
    time?: string;
    recurrenceCount?: number;
    highPrice?: number;
    lowPrice?: number;
    change?: string;
    tcBuyingPrice?: null;
    fcSellingPrice?: null;
    exchangeCommission?: number;
    usDollarRate?: number;
    high52wPrice?: number;
    high52wDate?: string;
    low52wPrice?: number;
    low52wDate?: string;
    currencyUnit?: number;
    provider?: string;
    timestamp?: number;
    id?: number;
    createdAt?: string;
    modifiedAt?: string;
    changeRate?: number;
    signedChangePrice?: number;
    signedChangeRate?: number;
  };
}

// exchangeEurToKrw 함수로 전달하여 사용하는 basePrice의 타입만 따로 지정
export type BasePriceNum = {
  basePrice: number;
};
