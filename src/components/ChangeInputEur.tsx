import React, { useState } from "react";
import useDebounce from "../hooks/useDebounce";

type priceType = {
  basePrice: number;
};

const ChangeInputEur = ({ basePrice }: priceType): React.ReactElement => {
  const [inputEur, setInputEur] = useState<string | number>(0); //any 바꿔야함
  const [showEur, setShowEur] = useState<string | number>();

  const debouncedValue = useDebounce<number>(inputEur);

  // 유로화 인풋 변화에 따라 상태 변화
  const inputEurValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let eurInput = e.target.value;

    // eurInput값이 존재
    if (eurInput) {
      // input값에서 잠시 콤마 제거 (콤마가 계속 생기는 문제)
      const numValue = eurInput.replaceAll(",", "");
      // 새로운 값에 3자리수마다 다시 콤마를 추가
      eurInput = numValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // inputEur 바꿔줘서 debouncedValue를 다시 받아온다
    setInputEur(eurInput.replaceAll(",", ""));
    setShowEur(eurInput);
  };

  const exchangeEurToKrw = (krw: any) => {
    return krw * basePrice;
  };

  // 디바운스 받아서 원환율 보여주기, 환율 곱해줌, 원화를 소수점 없앰, 세자리마다 콤마추가
  const WonInput = () => {
    const won = Math.floor(exchangeEurToKrw(debouncedValue));

    if (won || NaN) {
      // debouncedValue 값이 불러와져서 won이 계산되었을때
      return won.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    } else if (debouncedValue === "로딩중") {
      // debouncedValue이 불러오는 중일때 0.5초 뒤 바뀜
      return "계산중";
    } else {
      // 아무것도 안써있을때
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
