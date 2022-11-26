import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Suspense } from 'react';
import LoadingIcon from './components/LoadingIcon/LoadingIcon';
import { Global } from '@emotion/react';
import { global } from './styles/global';
import { Flex } from './styles/common';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense
        fallback={
          <Flex>
            <LoadingIcon width={80} />
          </Flex>
        }
      >
        <Global styles={global} />
        <App />
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
