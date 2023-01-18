import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Exchange } from '../api/exchange';
import { ExchangeApiContext } from '../context/ExchangeApiContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
  },
  logger: {
    log: console.log,
    warn: console.warn,
    error: () => {},
  },
});

export function wrapper(fakeApi: Exchange) {
  return ({ children }: { children: React.ReactNode }) =>
    withAllProviders(children, fakeApi);
}

export function withAllProviders(
  children: React.ReactNode,
  exchangeApi: Exchange
) {
  return (
    <ExchangeApiContext.Provider value={exchangeApi}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ExchangeApiContext.Provider>
  );
}
