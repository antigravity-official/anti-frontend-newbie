import React from 'react';
import { EurInfo } from '../type';

const Info = ({ eurInfo }: { eurInfo: EurInfo | undefined }) => {
  return (
    <div className='Info'>
      <div>
        <div>환율기준 (1 유로)</div>
        {eurInfo !== undefined ? (
          <>
            <div>
              {parseInt(eurInfo.basePrice.toFixed(0)).toLocaleString()}
              {eurInfo.basePrice - eurInfo.openingPrice > 0 && '▲'}
              {eurInfo.basePrice - eurInfo.openingPrice < 0 && '▼'}
              {Math.floor(eurInfo.changePrice).toLocaleString()}원 (
              {((eurInfo.changePrice / eurInfo.basePrice) * 100).toFixed(2)}%)
            </div>
            <div>
              <div>
                살때 :
                {parseInt(eurInfo.cashBuyingPrice.toFixed(0)).toLocaleString()}원
              </div>
              <div>
                팔때 :
                {parseInt(eurInfo.cashSellingPrice.toFixed(0)).toLocaleString()}원
              </div>
              <div>
                보낼때 :
                {parseInt(eurInfo.ttSellingPrice.toFixed(0)).toLocaleString()}원
              </div>
              <div>
                받을때 :
                {parseInt(eurInfo.ttSellingPrice.toFixed(0)).toLocaleString()}원
              </div>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Info;
