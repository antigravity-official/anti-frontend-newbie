export const getEuroInfo = async () => {
    const krweur = await fetch(
        "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
        .then((response) => response.json())
        .then((array) => array[0]);

    return krweur;
}

export interface EuroInfo {
    basePrice: number;
    cashBuyingPrice: number;
    cashSellingPrice: number;
    change: string;
    changePrice: number;
    changeRate: number;
    code: string;
    country: string;
    createdAt: Date;
    currencyCode: string;
    currencyName: string;
    currencyUnit: number;
    date: Date;
    exchangeCommission: number;
    fcSellingPrice: null;
    high52wDate: Date;
    high52wPrice: number;
    highPrice: number;
    id: number;
    low52wDate: Date;
    low52wPrice: number;
    lowPrice: number;
    modifiedAt: Date;
    name: string;
    openingPrice: number;
    provider: string;
    recurrenceCount: number;
    signedChangePrice: number;
    signedChangeRate: number;
    tcBuyingPrice: null;
    time: string;
    timestamp: number;
    ttBuyingPrice: number;
    ttSellingPrice: number;
    usDollarRate: number;
}