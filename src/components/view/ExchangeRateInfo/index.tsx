import * as S from '@components/view/ExchangeRateInfo/ExchangeRateInfo.style';

interface ExchangeRateInfoPropsType {
  cashBuyingPrice: string;
  cashSellingPrice: string;
  ttSellingPrice: string;
  ttBuyingPrice: string;
}

const ExchangeRateInfo = ({
  cashBuyingPrice,
  cashSellingPrice,
  ttSellingPrice,
  ttBuyingPrice,
}: ExchangeRateInfoPropsType) => {
  return (
    <S.Wrapper>
      <S.Text>살때 : {cashBuyingPrice}원</S.Text>
      <S.Text>팔때 : {cashSellingPrice}원</S.Text>
      <S.Text>보낼때 : {ttSellingPrice}원</S.Text>
      <S.Text>받을때 : {ttBuyingPrice}원</S.Text>
    </S.Wrapper>
  );
};

export default ExchangeRateInfo;
