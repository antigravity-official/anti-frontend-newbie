import React, { ChangeEvent, useCallback, useRef, useState } from "react";
import { ExchangeInfo } from "../../../typing";
import { addComma, formattingWon, unComma } from "../../utils";

interface Props {
  exchangeInfo: ExchangeInfo;
}

const ExchangeInput = ({ exchangeInfo }: Props) => {
  const [money, setMoney] = useState("");
  const [inputError, setInputError] = useState("");
  const { basePrice } = exchangeInfo;

  const exchangeEurToKrw = useCallback((money: string) => {
    const pureMoney = Number(unComma(money));
    const newBasePrice = Math.floor(basePrice);
    const exchangedMoney = Math.floor(pureMoney * newBasePrice);
    const formattingMoney = addComma(String(exchangedMoney));
    return formattingMoney;
  }, []);

  // dependency 에 money 를 넣고 prevMoney.current 대신 money 를 사용해도 되지만
  // 그렇게 하면 money 가 변경될 때마다 onMoneyChange 가 재생성되기 때문에 useCallback 을 사용하는 이유가 없다.
  // const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value;
  //   const unCommaValue = unComma(value);
  //   const formatRegex = /^\d{1,3}(,d{3})*$/;
  //
  //   const checkInputDot = (prev: string, curr: string) => {
  //     return (
  //       /^\d{1,3}(,d{3})*$/.test(prev) && /^\d{1,3}(,\d{3})*[.]$/.test(curr)
  //     );
  //   };
  //
  //   const checkDeleteDot = (prev: string, curr: string) => {
  //     return (
  //       /^\d{1,3}(,\d{3})*[.]\d{1}$/.test(prev) &&
  //       /^\d{1,3}(,\d{3})*[.]$/.test(curr)
  //     );
  //   };
  //
  //   // 소수점을 입력했을때 실행
  //   if (checkInputDot(prevMoney.current, value)) {
  //     console.log("1");
  //     prevMoney.current = addComma(unCommaValue) + ".";
  //     return setMoney(addComma(unCommaValue) + ".");
  //   }
  //   // 소수점을 지웠을때 실행
  //   if (checkDeleteDot(prevMoney.current, value)) {
  //     console.log("2");
  //     prevMoney.current = addComma(unCommaValue).replace(".", "");
  //     return setMoney(addComma(unCommaValue).replace(".", ""));
  //   }
  //   // 일반적인 실행
  //   if (/^\d{1,3}(,\d{3})*([.]\d{1,2})*$/.test(value)) {
  //     console.log("3");
  //     prevMoney.current = addComma(unCommaValue);
  //     return setMoney(addComma(unCommaValue));
  //   }
  //   // 모두 지웠을때 실행
  //   if (!value) {
  //     prevMoney.current = "0";
  //     return setMoney("0");
  //   }
  // }, []);

  // prevInteger 는 이전 숫자를 기억하고 사용자 커서 위치를 조작하는데 사용
  const prevInteger = useRef("");
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputError("");
    const [integer, decimal] = e.target.value.split(".");
    const caret = e.target.selectionStart ?? e.target.value.length;
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

    setMoney(fullMoney);

    const diffLength = formattedInteger.length - prevInteger.current.length;
    console.log("caret", caret);
    console.log(diffLength);
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
    prevInteger.current = formattedInteger;
  }, []);

  return (
    <>
      <div>
        <input type="text" pattern="[0-9]+" value={money} onChange={onChange} />
        {exchangeInfo.currencyName} ▶︎{" "}
        <input value={exchangeEurToKrw(money)} disabled /> 원
      </div>
      {inputError && <div style={{ color: "orange" }}>{inputError}</div>}
    </>
  );
};

export default ExchangeInput;
