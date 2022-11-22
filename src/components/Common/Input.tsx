import React, { useContext } from "react";
import { ExchangeData } from "../../VM";
import { Content } from "./Content";
import { onChangeEuro } from "../../model";
import { InputType } from "../../types/Type";
export const Input = (prop: any) => {
  const { euro, krw } = useContext(ExchangeData);
  const { data, onChangeExchange } = prop;
  // console.log(typeof data);
  // console.log(typeof onChangeExchange);

  return (
    <>
      <input
        type="text"
        value={euro}
        onChange={(e) => onChangeExchange(e.target.value)}
      />
      유로 ▶︎
      <input disabled value={krw} />
      <hr />
      <Content>제공자 : {data?.provider}</Content>
    </>
  );
};
