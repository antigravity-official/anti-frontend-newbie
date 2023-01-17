import EurInfoModel from "../model/EurInfoModel";
import ExchangeComaViewModel from "./ExchangeComaViewModel";

const ExchangeViewModel = async (eur: string) => {
  const eurInfo = await EurInfoModel();

  const exchangeEurToKrw = Number(eur.replaceAll(",", "")) * eurInfo.basePrice;

  return ExchangeComaViewModel(exchangeEurToKrw, "kr");
};

export default ExchangeViewModel;
