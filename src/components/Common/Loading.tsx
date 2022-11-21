import { useContext } from "react";
import { ExchangeData } from "../../models";

export const Loading = () => {
  const { boolean } = useContext(ExchangeData);

  console.log(boolean);
  return (
    <div>{!boolean ? <div>로딩중입니다 잠시만 기달려주세요</div> : null}</div>
  );
};
