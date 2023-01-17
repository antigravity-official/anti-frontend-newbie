import { ChangeEvent } from "react";
import { IEurInfo } from "./eurInfo";

export interface IHomeViewProps {
  eurInfo: IEurInfo;
  eurTokrw: string;
  exchangeUpDown: boolean;
  onChangeInputEur: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IStylesProps {
  exchangeUpDown: boolean;
}
