import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Suspense } from 'react';
import LoadingIcon from './components/LoadingIcon/LoadingIcon';
import { Global } from '@emotion/react';
import { global } from './styles/global';

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
        <Global styles={global} />
        <App />
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
