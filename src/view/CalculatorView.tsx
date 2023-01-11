import React, { useEffect, useState } from "react";
import { commafy } from "utility/numToString";

type CalcProps = {
  calc: (num: number)=> number;
}

const CalculatorView = ({ calc }: CalcProps) => {
  const [krVal, setKrVal] = useState<number>(0);

  const handleKeyDown = (e: React.FormEvent<HTMLInputElement>) => {
    setKrVal(+e.currentTarget.value);
  }

  return (
    <div className="calculator">
      <input type='number' value={krVal} onChange={ handleKeyDown }/>
     유로 ▶︎ <input disabled value={commafy(calc(krVal), 0)} /> 원
    </div>
  );
}

export default CalculatorView;