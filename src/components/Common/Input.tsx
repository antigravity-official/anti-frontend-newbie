import React, { useState, useContext } from "react";
import { ExchangeData } from "../../models";
import { changKR, exchangeEurToKrw } from "../../viewmodels";

import { isFloat } from "../../viewmodels";
import { Content } from "./Content";

export const Input = () => {
  const [eu, setEu] = useState(null);
  const { data } = useContext(ExchangeData);

  // const exchangeEurToKrw = (krw: any, data: any) => krw * data.basePrice;
  return (
    <>
      <input
        step="1"
        value={eu ?? " "}
        onChange={
          // onChanageInput()
          (e: React.ChangeEvent<HTMLInputElement>) =>
            isFloat(e.target.value, setEu)
        }
      />
      유로 ▶︎
      <input disabled value={changKR(exchangeEurToKrw(eu, data))} />
      <hr />
      <Content>제공자 : {data?.provider}</Content>
    </>
  );
};

// <input
//         step="1"
//         value={eu ?? " "}
//         onChange={
//           // onChanageInput()
//           (e: React.ChangeEvent<HTMLInputElement>) =>
//             isFloat(e.target.value, setEu)
//         }
//       />{" "}
//       유로 ▶︎ <input disabled value={changKR(exchangeEurToKrw(eu, data))} />
//       <hr />
//       <Content>제공자 : {data?.provider}</Content>
