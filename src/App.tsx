import React, { useEffect, useState } from 'react';

import Loading from './components/ui/Loading';
import ExchangeInfo from './components/main/ExchangeInfo';
import ExchangeRate from './components/main/ExchangeRate';
import ExchangeInputs from './components/main/ExchangeInputs';
import VerticalLine from './components/ui/VerticalLine';

import useFetch from './hooks/useFetch';
import { EurInfoTypes } from './types/eurInfo';

export const App = () => {
  const { data = [], isLoading } = useFetch<EurInfoTypes[]>({
    url: `${process.env.REACT_APP_API_URL}`,
  });

  const euroInfo = data[0];

  if (isLoading) return <Loading />;
  return (
    <>
      {euroInfo && (
        <>
          <ExchangeRate
            basePrice={euroInfo.basePrice}
            openingPrice={euroInfo.openingPrice}
            changePrice={euroInfo.changePrice}
          />
          <ExchangeInfo
            cashBuyingPrice={euroInfo.cashBuyingPrice}
            cashSellingPrice={euroInfo.cashSellingPrice}
            ttSellingPrice={euroInfo.ttSellingPrice}
            ttBuyingPrice={euroInfo.ttBuyingPrice}
          />
          <VerticalLine />
          <ExchangeInputs basePrice={euroInfo.basePrice} />
        </>
      )}
    </>
  );
};

export default App;
