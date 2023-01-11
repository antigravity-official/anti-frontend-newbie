import exchangeRateData from '../mockData/exchangeRateData';
import { getExchangeRateInfo } from '../../utils';

describe('환율 정보', () => {
  const beforePoint = 2;
  const afterPoint = 0;
  const { rawInfo, beforeInfo, afterInfo } = getExchangeRateInfo(exchangeRateData, beforePoint, afterPoint);
  
  it('raw 데이터', () => {
    const expectedRawInfo = {
      currencyName: '유로',
      basePrice: 1330.36,
      openingPrice: 1348.81,
      changePrice: 11.04,
    };
  
    expect(rawInfo).toMatchObject(expectedRawInfo);
  });

  it('raw 데이터를 소수점 2 자리까지 가공', () => {
    const expectedBeforeInfo = {
      basePrice: '1,330.36',
      cashBuyingPrice: '1,356.83',
      cashSellingPrice: '1,303.89',
      ttSellingPrice: '1,343.66',
      ttBuyingPrice: '1,317.06',
    };
  
    expect(beforeInfo).toMatchObject(expectedBeforeInfo);
  });

  it('raw 데이터를 소수점 0 자리까지 가공', () => {
    const expectedAfterInfo = { 
      changePrice: '11',
    };

    expect(afterInfo).toMatchObject(expectedAfterInfo);
  });
});
