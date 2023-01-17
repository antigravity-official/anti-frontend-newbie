import { EuroInfo } from "./Euroinfo";

export interface EuroInfoProps {
  euroInfo: EuroInfo;
}

export interface ConvertEuroToKrwProps {
  exchangeEuroToKrw(krw: number): number;
  exchangeInput(e: React.ChangeEvent<HTMLInputElement>): number;
  onChangeExchangeValue(value: number): void;
  exchange: number;
}

export interface LoadingProps {
  isReady: Promise<boolean>;
}
