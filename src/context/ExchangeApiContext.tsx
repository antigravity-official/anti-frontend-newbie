import { createContext, useContext } from 'react';
import { Exchange } from '../api/exchange';

export const ExchangeApiContext = createContext({} as Exchange);

export function useExchangeApi() {
  return useContext(ExchangeApiContext);
}
