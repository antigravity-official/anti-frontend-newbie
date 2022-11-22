import { ViewProps } from "./ViewProps";

export interface ViewModelProps {
  viewModel: {
    isReady: boolean;
    eurInfo: ViewProps | undefined;
    eur: string;
    Krw: string;
    getEurInfo: () => Promise<void>;
    exchangeEurToKrw: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}
