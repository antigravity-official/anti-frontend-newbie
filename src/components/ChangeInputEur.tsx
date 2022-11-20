import React, { useState, ChangeEvent } from "react";
import useInputDebounce from "../hooks/useInputDebounce";

type priceType = {
  basePrice: number;
};

const ChangeInputEur = ({ basePrice }: priceType): React.ReactElement => {
  const [inputEur, setInputEur] = useState<string | number>(0); // 사용하는 용도
  const [showEur, setShowEur] = useState<string>(); // 보여지는 용도

  const debouncedValue = useInputDebounce(inputEur, 300, "계산중");

  // 유로화 인풋 변화에 따라 상태 변화
  const inputEurValue = (e: ChangeEvent<HTMLInputElement>) => {
    let eurInput = e.target.value;

    // eurInput값이 존재할때 콤마 생성
    if (eurInput) {
      // input값에서 잠시 콤마 제거 (콤마가 계속 생기는 문제)
      const numValue = eurInput.replaceAll(",", "");
      // 점 2개 이상 못찍도록
      if (numValue.split(".").length - 1 > 1) {
        return;
      }
      // 소수 2개 이상 못쓰도록
      if (
        numValue.includes(".") &&
        numValue.charAt(numValue.length - 4) === "."
      ) {
        return;
      }

      // 새로운 값에 3자리수마다 다시 콤마를 추가
      eurInput = numValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // inputEur 바꿔줘서 debouncedValue를 다시 받아온다
    setInputEur(eurInput.replaceAll(",", ""));
    // 보여지는 유로화
    setShowEur(eurInput);
  };

  const exchangeEurToKrw = (krw: any) => {
    return krw * basePrice;
  };

  // 디바운스 받아서 원환율 보여주기, 환율 곱해줌, 원화를 소수점 없앰, 세자리마다 콤마추가
  const WonInput = () => {
    const won = Math.floor(exchangeEurToKrw(debouncedValue));

    if (won) {
      return won.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    } else if (debouncedValue === "계산중") {
      return debouncedValue;
    } else {
      return "";
    }
  };

  return (
    <>
      <input type="text" onChange={inputEurValue} value={showEur} />
      유로 ▶︎
      <input disabled value={WonInput()} /> 원
    </>
  );
};

export default ChangeInputEur;
