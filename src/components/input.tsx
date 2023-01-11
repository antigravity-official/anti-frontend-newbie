import React, { useState } from "react";
import { priceInformation } from "../App";
import styled from "styled-components";

function Input({ eurInfo }: { eurInfo: priceInformation }) {
  const [userWritePrice, setUserWritePrice] = useState<number>(0);
  const [userWrite, setUserWrite] = useState<string>("");
  const exchangeEurToKrw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userPrice = e.target.value;
    let regexp = /^\d*.?\d{0,2}$/;
    if (eurInfo && userPrice !== "0") {
      setUserWrite(userPrice);
      if (!regexp.test(userPrice)) {
        alert("소수점 둘째자리까지 입력가능합니다.");
        setUserWrite("");
        setUserWritePrice(0);
      } else {
        setUserWritePrice(Number(userPrice) * eurInfo.basePrice);
      }
    }
  };

  return (
    <InputSpace>
      <input
        className="keyOff"
        value={userWrite}
        step="0.1"
        type="number"
        onChange={exchangeEurToKrw}
      />
      유로 ▶︎
      <input disabled value={Math.floor(userWritePrice).toLocaleString("en")} />
      원
    </InputSpace>
  );
}

const InputSpace = styled.div`
  width: 100%;
  height: 30%;
`;

export default Input;
