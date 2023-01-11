import React from "react";
import { ExchangeModel } from "interfaces/Exchange";
import ExchangeViewModel from "viewModel/ExchangeViewModel";
import KreurModel from "model/KreurModel";
import ExchangeController from "controllers/ExchangeController";

const ExchangeProvider = () => {
  const exchangeModel: ExchangeModel = new KreurModel();
  const exchangeViewModel: ExchangeViewModel = new ExchangeViewModel(exchangeModel);

  return (
    <ExchangeController viewmodel={ exchangeViewModel } />
  );
};

export default ExchangeProvider;