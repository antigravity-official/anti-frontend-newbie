import { NumericFormat } from "react-number-format";
import { ConvertEuroToKrwProps } from "../../types/Props";
import { ConvertArrow } from "./ConvertArrow";
import * as S from "./style";

export const ConvertEuroToKrw = ({
  exchangeEuroToKrw,
  exchange,
  exchangeRemovedCommaValue,
  onChangeExchangeValue,
}: ConvertEuroToKrwProps) => {
  return (
    <>
      <S.ConvertContainer>
        <NumericFormat
          onChange={(e) =>
            onChangeExchangeValue(
              exchangeEuroToKrw(exchangeRemovedCommaValue(e))
            )
          }
          decimalScale={2}
          thousandSeparator=","
        />
        Euro
      </S.ConvertContainer>
      <ConvertArrow />
      <S.ConvertContainer>
        <NumericFormat value={exchange} thousandSeparator="," disabled />
        Won
      </S.ConvertContainer>
    </>
  );
};
