import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import EuroInfoView from './component/EuroInfo/EuroInfoView';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <EuroInfoView />
    </QueryClientProvider>
  );
};

export default App;
