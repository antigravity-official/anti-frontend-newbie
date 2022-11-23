// 데이터 가공
export const exchangeEurToKrw = (krw: number, eurInfo: any): string => {
  let price = krw * eurInfo.props.basePrice;
  var twoPrice = price.toFixed(2);
  let result = twoPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return result;
};
    

