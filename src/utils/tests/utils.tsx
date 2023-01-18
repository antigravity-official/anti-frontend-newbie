import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Exchange } from '../../api/exchange';
import { ExchangeApiContext } from '../../context/ExchangeApiContext';

export function withAllProviders(
  children: React.ReactNode,
  exchangeApi: Exchange
) {
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

  return (
    <ExchangeApiContext.Provider value={exchangeApi}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ExchangeApiContext.Provider>
  );
}
