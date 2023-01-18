import React, { ChangeEvent, useCallback, useRef, useState } from "react";
import { ExchangeInfo } from "../../../typing";
import { addComma, unComma } from "../../utils";

interface Props {
  exchangeInfo: ExchangeInfo;
}

const ExchangeInput = ({ exchangeInfo }: Props) => {
  const [money, setMoney] = useState("");
  const [inputError, setInputError] = useState("");
  const { basePrice } = exchangeInfo;

  const exchangeEurToKrw = useCallback((inputMoney: string) => {
    const pureMoney = Number(unComma(inputMoney));
    const newBasePrice = Math.floor(basePrice);
    const exchangedMoney = Math.floor(pureMoney * newBasePrice);
    const formattingMoney = addComma(String(exchangedMoney));
    return formattingMoney;
  }, []);

  // prevInteger 는 이전 숫자를 기억하고 사용자 커서 위치를 조작하는데 사용
  const prevInteger = useRef("");
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputError("");
    const { value } = e.target;
    const [integer, decimal, notValid] = value.split(".");
    const caret = e.target.selectionStart ?? value.length;
    // "."을 2개 이상 입력했다면 early return
    if (notValid !== undefined) {
      window.requestAnimationFrame(() => {
        e.target.selectionStart = caret - 1;
        e.target.selectionEnd = caret - 1;
      });
      return setInputError("소수점은 한번만 입력할 수 있습니다.");
    }
    // 만약 소수점을 3자리 이상 입력했다면 early return
    if (decimal?.length > 2) {
      window.requestAnimationFrame(() => {
        e.target.selectionStart = caret - 1;
        e.target.selectionEnd = caret - 1;
      });
      return setInputError("소수점은 최대 2자리까지만 입력할 수 있습니다.");
    }
    // 숫자, ".", "," 외에 다른 입력값이 입력 되는 경우 early return
    if (/[^\d.,]/.test(integer)) {
      window.requestAnimationFrame(() => {
        e.target.selectionStart = caret - 1;
        e.target.selectionEnd = caret - 1;
      });
      return setInputError("숫자만 입력할 수 있습니다.");
    }
    const pureInteger = unComma(integer);
    const formattedInteger = addComma(pureInteger);
    const formattedDecimal = decimal?.slice(0, 2);
    const fullMoney =
      formattedDecimal === undefined
        ? formattedInteger
        : formattedInteger + "." + formattedDecimal;
    // 현재 입력 값과 이전 입력 값을 비교해서 커서의 위치를 조작
    const diffLength = formattedInteger.length - prevInteger.current.length;
    if (diffLength === 2) {
      // 콤마가 추가됐을 경우 커서 위치 유지
      window.requestAnimationFrame(() => {
        e.target.selectionStart = caret + 1;
        e.target.selectionEnd = caret + 1;
      });
    } else if (diffLength === -2) {
      // 콤마가 제거됐을 경우 커서 위치 유지
      window.requestAnimationFrame(() => {
        // 만약 맨앞 숫자가 제거되면 맨앞을 유지하는 로직
        const newCaret = caret === 0 ? 0 : caret - 1;
        e.target.selectionStart = newCaret;
        e.target.selectionEnd = newCaret;
      });
    } else {
      // 콤마가 추가,제거 되지 않은 경우
      window.requestAnimationFrame(() => {
        e.target.selectionStart = caret;
        e.target.selectionEnd = caret;
      });
    }

    setMoney(fullMoney);
    prevInteger.current = formattedInteger;
  }, []);

  return (
    <>
      <div>
        <input type="text" value={money} onChange={onChange} />
        {exchangeInfo.currencyName} ▶︎{" "}
        <input value={exchangeEurToKrw(money)} disabled /> 원
      </div>
      {inputError && <div style={{ color: "orange" }}>{inputError}</div>}
    </>
  );
};

export default ExchangeInput;
