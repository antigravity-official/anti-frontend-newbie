import * as S from '@components/view/TradingExchangeRate/TradingExchangeRate.style';

interface TradingExchangeRatePropsType {
  basePrice: string;
  changePrice: number;
  upDownArrow: string;
  upDownPercent: string;
}

const TradingExchangeRate = ({
  basePrice,
  changePrice,
  upDownArrow,
  upDownPercent,
}: TradingExchangeRatePropsType) => {
  return (
    <S.Wrapper>
      <S.Text>환율기준 (1 유로)</S.Text>
      <S.Text>{basePrice}원</S.Text>
      <S.Text>
        {upDownArrow} {changePrice}원 ({upDownPercent}%)
      </S.Text>
    </S.Wrapper>
  );
};

export default TradingExchangeRate;
