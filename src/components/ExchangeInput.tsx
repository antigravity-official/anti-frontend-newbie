import { useState } from "react";
import { Price } from "../pages/Main";

const ExchangeInput = (props: { eurInfo: Price }) => {
  // const [inputPrice, setInputPrice] = useState("");
  const [krwPrice, setKrwPrice] = useState<number | string>("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputValue = (value: string) => {
    if (value !== "") {
      if (/[0-9]/g.test(value)) {
        setErrorMessage("");
        if (/^[\d]*\.?[\d]{0,2}$/.test(value)) {
          // setInputPrice(value);
          exchangeEurToKrw(Number(value));
        } else {
          setErrorMessage("소수점 둘째자리까지 계산됩니다.");
        }
      } else {
        setErrorMessage("숫자만 입력해주세요.");
      }
    } else {
      setKrwPrice("");
      setErrorMessage("");
    }
    // if (/^[\d]*\.?[\d]{0,2}$/.test(value)) {
    //   // console.log(value);
    //   setErrorMessage("");
    //   setInputPrice(value);
    //   exchangeEurToKrw(Number(value));
    // } else {
    //   setErrorMessage("숫자만 입력해주세요.(소수점 둘째자리까지 입력 가능)");
    // }
  };

  const exchangeEurToKrw = (krw: number) => {
    setKrwPrice(krw * props.eurInfo.basePrice);
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        // onChange={(e) => exchangeEurToKrw(Number(e.target.value))}
        onChange={(e) => handleInputValue(e.target.value)}
      />{" "}
      유로 ▶︎{" "}
      <input value={krwPrice.toLocaleString().split(".")[0] || ""} disabled />{" "}
      원<div className="error-message">{errorMessage}</div>
    </div>
  );
};

export default ExchangeInput;
