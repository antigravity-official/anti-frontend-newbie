import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Main from '../pages/Main';
import LoadingSpanner from '../components/LoadingSpinner';

import styled from '@emotion/styled';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <Suspense fallback={<LoadingSpanner />}>
          <Main />
        </Suspense>
      </AppContainer>
    </QueryClientProvider>
  );
};

export default App;

const AppContainer = styled.div`
  width: 31rem;
  height: 100vh;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  padding: 1rem;
`;
