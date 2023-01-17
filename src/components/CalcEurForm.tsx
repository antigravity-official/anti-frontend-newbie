import Input from "../style/Input";
import Span from "../style/Span";
import { addComma } from "../utils/addComma";
import { useState, Fragment } from "react";
import InputDiv from "../style/InputDiv";
import { useEurInfo } from "../data-access/hooks/useEurInfo";

const CalcEurForm = () => {
  const [inputEuro, setInputEuro] = useState("");
  const [isInputFocus, setIsInputFocus] = useState(false);
  const eurInfo = useEurInfo();

  const exchangeEurToKrw = (inputPrice: string, basePrice: number) => {
    return Number(inputPrice) * basePrice;
  };

  const focusInput = () => {
    setIsInputFocus(true);
  };

  const blurInput = () => {
    setIsInputFocus(false);
  };

  // 숫자, 소수점 둘째 자리까지만 통과하는 정규성 검증 함수
  const validateInput = (value: string) => {
    const regExp = /^[\d]*\.?[\d]{0,2}$/;
    return regExp.test(value);
  };

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (validateInput(event.target.value)) setInputEuro(event.target.value);
  };

  return (
    <Fragment>
      <InputDiv isInputFocus={isInputFocus}>
        <Input
          id="EUR"
          value={inputEuro}
          type="number"
          onChange={changeInput}
          onFocus={focusInput}
          onBlur={blurInput}
        />
        <label htmlFor="EUR">EUR</label>
      </InputDiv>
      <Span size={30}>
        {addComma(Math.floor(exchangeEurToKrw(inputEuro, eurInfo!.basePrice)))}
      </Span>{" "}
      원
    </Fragment>
  );
};

export default CalcEurForm;
