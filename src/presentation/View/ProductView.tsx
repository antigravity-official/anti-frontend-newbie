import { IProductView } from "../../types/types";
import Arrow from "../Components/arrow/Arrow";
import NumberInput from "../Components/input/Input";
import * as S from "./ProductView.style";

function ProductView({
  data,
  inputValue,
  handleChange,
  exchangeEurToKrw,
  priceComma,
}: IProductView) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.HeaderTitle>환율계산기</S.HeaderTitle>
          <S.HeaderSubtitle>환율기준 (1 유로)</S.HeaderSubtitle>
        </S.Header>

        {data && (
          <>
            <S.ExchangeRateBox>
              <S.ExchangeRateNumber>
                {priceComma(data.basePrice)}
              </S.ExchangeRateNumber>
              <Arrow color={"red"}>
                {data.basePrice - data.openingPrice > 0 && "▲"}
              </Arrow>
              <Arrow>{data.basePrice - data.openingPrice < 0 && "▼"}</Arrow>
              {data.changePrice} 원
              <S.ExchangeRateText>
                ({(data.changePrice / data.basePrice) * 100}
                %)
              </S.ExchangeRateText>
            </S.ExchangeRateBox>
            <S.ItemList>
              <S.Item>
                <S.ItemTitle>살때</S.ItemTitle>
                <S.ItemPrice>{priceComma(data.cashBuyingPrice)}</S.ItemPrice>
              </S.Item>
              <S.Item>
                <S.ItemTitle>팔때</S.ItemTitle>
                <S.ItemPrice>{priceComma(data.cashSellingPrice)}</S.ItemPrice>
              </S.Item>
              <S.Item>
                <S.ItemTitle>보낼때</S.ItemTitle>
                <S.ItemPrice>{priceComma(data.ttSellingPrice)}</S.ItemPrice>
              </S.Item>
              <S.Item>
                <S.ItemTitle>받을때</S.ItemTitle>
                <S.ItemPrice>{priceComma(data.ttBuyingPrice)}</S.ItemPrice>
              </S.Item>
            </S.ItemList>
            <S.NumberBox>
              <S.NumberBoxTitle>유로 : €</S.NumberBoxTitle>
              <NumberInput
                placeholder="숫자를 입력해주세요"
                value={inputValue}
                onChange={handleChange}
              />
            </S.NumberBox>
            <S.NumberBoxTitle>원화 : 원</S.NumberBoxTitle>
            <NumberInput value={exchangeEurToKrw(data.basePrice)} disabled />
          </>
        )}
      </S.Wrapper>
    </S.Container>
  );
}

export default ProductView;
