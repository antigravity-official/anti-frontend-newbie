import { EurInfoProps } from "./EurInfoProps";

export interface ViewModelProps extends HomePageExchangeInputProps {
  isReady: boolean;
  eurInfo?: EurInfoProps;
  eur: string;
}

export interface HomePageExchangeInputProps {
  exchangeEurToKrw: (e: React.ChangeEvent<HTMLInputElement>) => void;
  eur: string;
  Krw: string;
}
