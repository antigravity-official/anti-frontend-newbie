import { EuroInfoProps } from "../../types/types";
import * as S from "./style";

export const ExchangeRate = ({ euroInfo }: EuroInfoProps) => {
  return (
    <S.ExChangeRateContainer>
      <S.ExChangeRatetitle>환율기준 (1 유로)</S.ExChangeRatetitle>
      <S.ExChangeRatePrice>
        <div>{euroInfo.basePrice} 원</div>
        <div>
          {euroInfo.basePrice - euroInfo.openingPrice > 0 ? "▲" : "▼"}
          {euroInfo.changePrice}원
        </div>
      </S.ExChangeRatePrice>
      <S.ExChangePercentage>
        ({(euroInfo.changePrice / euroInfo.basePrice) * 100}%)
      </S.ExChangePercentage>
      <S.ExChangeGrid>
        <div>살때 : {euroInfo.cashBuyingPrice}</div>
        <div>보낼때 : {euroInfo.ttSellingPrice}</div>
        <div>팔때 : {euroInfo.cashSellingPrice}</div>
        <div>받을때 : {euroInfo.ttBuyingPrice}</div>
      </S.ExChangeGrid>
    </S.ExChangeRateContainer>
  );
};
