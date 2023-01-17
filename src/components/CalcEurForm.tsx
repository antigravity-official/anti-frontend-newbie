import Input from "../style/Input";
import { useState, Fragment } from "react";
import InputDiv from "../style/InputDiv";
import { useEurInfo } from "../data-access/hooks/useEurInfo";
import DisplayPrice from "./DisplayPrice";
import { useBasePrice } from "../data-access/hooks/useBasePrice";

const CalcEurForm = () => {
  const [inputEuro, setInputEuro] = useState("");
  const [isInputFocus, setIsInputFocus] = useState(false);
  const basePrice = useBasePrice();

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
      <DisplayPrice
        price={exchangeEurToKrw(inputEuro, basePrice)}
        size={30}
        suffix="원"
      />
    </Fragment>
  );
};

export default CalcEurForm;
