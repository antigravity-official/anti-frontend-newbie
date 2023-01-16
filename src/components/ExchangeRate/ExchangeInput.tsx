import React, { ChangeEvent, useCallback, useRef, useState } from "react";
import { ExchangeInfo } from "../../../typing";
import { addComma, unComma } from "../../utils";

interface Props {
  exchangeInfo: ExchangeInfo;
}

const ExchangeInput = ({ exchangeInfo }: Props) => {
  const [money, setMoney] = useState("0");
  const prevMoney = useRef("");

  const exchange = useCallback((money: number) => {
    const value = Math.round(money * exchangeInfo.basePrice);
    const CommaValue = addComma(value);
    return CommaValue;
  }, []);

  // dependency 에 money 를 넣고 prevMoney.current 대신 money 를 사용해도 되지만
  // 그렇게 하면 money 가 변경될 때마다 onMoneyChange 가 재생성되기 때문에 useCallback 을 사용하는 이유가 없다.
  const onMoneyChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const unCommaValue = unComma(value);
    // 소수점을 입력했을때 실행
    if (
      prevMoney.current.match(/^\d{1,}[\d|,]*$/) &&
      value.match(/^[\d|,]*[.]$/gm)
    ) {
      prevMoney.current = addComma(unCommaValue) + ".";
      return setMoney(addComma(unCommaValue) + ".");
    }
    // 소수점을 지웠을때 실행
    if (
      prevMoney.current.match(/^(\d{1,3}|,)*[.]\d{1,2}/) &&
      value.match(/^(\d{1,3}|,)*[.]$/)
    ) {
      prevMoney.current = addComma(unCommaValue).replace(".", "");
      return setMoney(addComma(unCommaValue).replace(".", ""));
    }
    // 일반적인 실행
    if (value.match(/^(\d{1,3})+[\d|,]*(([.]\d{1,2})|)+$/)) {
      prevMoney.current = addComma(unCommaValue);
      return setMoney(addComma(unCommaValue));
    }
    // 모두 지웠을때 실행
    if (!value) {
      prevMoney.current = "0";
      return setMoney("0");
    }
  }, []);

  return (
    <>
      <div>
        <input type="text" value={money} onChange={onMoneyChange} />
        {exchangeInfo.currencyName} ▶︎{" "}
        <input value={exchange(unComma(money))} disabled /> 원
      </div>
      {/*{maxMoney && <div>최대 100까지 입력할 수 있습니다.</div>}*/}
    </>
  );
};

export default ExchangeInput;
