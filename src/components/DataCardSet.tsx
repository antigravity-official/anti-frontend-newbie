import React from 'react';
import styled from 'styled-components';
import DataCard from './DataCard';

interface ParamProps {
  cashBuyingPrice: number;
  cashSellingPrice: number;
  ttSellingPrice: number;
  ttBuyingPrice: number;
}

const DataCardWrap = styled.section`
  display: flex;
  gap: 0.75rem;
  @media screen and (max-width: 850px) {
    position: absolute;
    top: 23rem;
  }
`;

const DataCardSet = ({
  cashBuyingPrice,
  cashSellingPrice,
  ttSellingPrice,
  ttBuyingPrice,
}: ParamProps) => {
  return (
    <DataCardWrap>
      <DataCard
        stateOne={'살 때'}
        stateTwo={'팔 때'}
        priceOne={cashBuyingPrice}
        priceTwo={cashSellingPrice}
      />
      <DataCard
        stateOne={'보낼 때'}
        stateTwo={'받을 때'}
        priceOne={ttSellingPrice}
        priceTwo={ttBuyingPrice}
      />
    </DataCardWrap>
  );
};

export default DataCardSet;
