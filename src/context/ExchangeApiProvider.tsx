import ExchangeApi from '../api/exchange';
import { ExchangeApiContext } from './ExchangeApiContext';

type ExchangeApiProviderprops = {
  children: React.ReactNode;
};

const exchangeApi = new ExchangeApi();

export function ExchangeApiProvider({ children }: ExchangeApiProviderprops) {
  return (
    <ExchangeApiContext.Provider value={exchangeApi}>
      {children}
    </ExchangeApiContext.Provider>
  );
}
