import React, { useState } from 'react';
import { DashBoard, Input, Output } from '../components/UI';
import { IViewModel, TCurrency } from '../types';

function CurrencyView({
  viewModel,
  handleChange,
  value
}: {
  viewModel: IViewModel;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) {

  return (
    <>
      <DashBoard
        basePrice={viewModel.info.basePrice}
        openingPrice={viewModel.info.openingPrice}
        changePrice={viewModel.info.changePrice}
        cashBuyingPrice={viewModel.info.cashBuyingPrice}
        cashSellingPrice={viewModel.info.cashSellingPrice}
        ttSellingPrice={viewModel.info.ttSellingPrice}
        ttBuyingPrice={viewModel.info.ttBuyingPrice}
      />
      <div>
        <Input handleChange={handleChange} input={value} />
        <Output value={viewModel.calOut(value)} />
      </div>
    </>
  );
}

export default CurrencyView;
