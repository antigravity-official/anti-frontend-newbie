import EurInfoModel from "../model/EurInfoModel";

const ExchangeViewModel = async (krw: string) => {
  const eurInfo = await EurInfoModel();
  // model ExchangeCalculatorModel
  const exchangeEurToKrw = Number(krw) * eurInfo.basePrice;

  return exchangeEurToKrw;
};

export default ExchangeViewModel;
