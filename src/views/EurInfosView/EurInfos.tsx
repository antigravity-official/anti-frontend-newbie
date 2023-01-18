import * as S from './EurInfos.style';
import { KrwEurInfosTypes } from '../../interfaces/exchange';

function ExchangeEurInfos({ krwEurInfos }: { krwEurInfos: KrwEurInfosTypes }) {
  return (
    <S.Container>
      <div>환율기준 (1 유로)</div>
      <div>
        {krwEurInfos.basePrice}
        {krwEurInfos.basePrice - krwEurInfos.openingPrice > 0 && '▲'}
        {krwEurInfos.basePrice - krwEurInfos.openingPrice < 0 && '▼'}
        {krwEurInfos.changePrice}원
        <br />({(krwEurInfos.changePrice / krwEurInfos.basePrice) * 100}%)
      </div>
      <div>살때 : {krwEurInfos.cashBuyingPrice}</div>
      <div>팔때 : {krwEurInfos.cashSellingPrice}</div>
      <div>보낼때 : {krwEurInfos.ttSellingPrice}</div>
      <div>받을때 : {krwEurInfos.ttBuyingPrice}</div>
    </S.Container>
  );
}

export default ExchangeEurInfos;
