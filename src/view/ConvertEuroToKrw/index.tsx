import React from "react";
import { NumericFormat } from "react-number-format";
import { ConvertEuroToKrwProps } from "../../types/Props";

import * as S from "./style";

export const ConvertEuroToKrw = ({
  exchangeEuroToKrw,
  exchange,
  exchangeInput,
  onChangeExchangeValue,
}: ConvertEuroToKrwProps) => {
  return (
    <>
      <S.ConvertInput>
        <NumericFormat
          onChange={(e) =>
            onChangeExchangeValue(exchangeEuroToKrw(exchangeInput(e)))
          }
          decimalScale={2}
          thousandSeparator=","
        ></NumericFormat>
        Euro
      </S.ConvertInput>
      <S.ConvertArrow>▼</S.ConvertArrow>
      <S.ConvertInput>
        <NumericFormat
          value={exchange}
          thousandSeparator=","
          disabled
        ></NumericFormat>
        Won
      </S.ConvertInput>
    </>
  );
};
