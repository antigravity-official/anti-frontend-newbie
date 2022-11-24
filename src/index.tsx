import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Suspense } from 'react';
import LoadingIcon from './components/LoadingIcon/LoadingIcon';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense
        fallback={
          <div>
            <LoadingIcon width={80} />
          </div>
        }
      >
        <App />
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
