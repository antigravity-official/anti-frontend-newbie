import React, { useState, useCallback } from "react";
import ExchangeViewModel from "viewModel/ExchangeViewModel";
import ExchangeView from "view/ExchangeView";

type ViewModelProps = {
  viewmodel: ExchangeViewModel;
}

const ExchangeCongroller = ({ viewmodel }: ViewModelProps) => {
  const [isChanged, setIsChanged] = useState(false);

  const updateExchangeInfo = useCallback(async () => {
    await viewmodel.update();
    setIsChanged(!isChanged);
  }, [viewmodel]);

  const exchangeCalc = useCallback((num: number): number => {
    return viewmodel.exchange(num);
  }, [viewmodel]);
  
  return (
    <ExchangeView 
    exchangeData = { viewmodel.getAll() }
    handleUpdate = { updateExchangeInfo }
    calc = { exchangeCalc } 
    />
  );
};

export default ExchangeCongroller;