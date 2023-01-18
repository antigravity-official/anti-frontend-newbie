import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import EuroInfoView from './component/EuroInfo/EuroInfoView';
import { ExchangeApiProvider } from './context/ExchangeApiProvider';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <ExchangeApiProvider>
      <QueryClientProvider client={queryClient}>
        <EuroInfoView />
      </QueryClientProvider>
    </ExchangeApiProvider>
  );
};

export default App;
