import { useContext } from "react";
import { Spinner } from "./Spinner";
import { ExchangeData } from "../../VM";

export const Loading = (prop: any) => {
  const { isChange } = useContext(ExchangeData);
  console.log(isChange);
  return (
    <>
      <Spinner />{" "}
    </>
  );
};
