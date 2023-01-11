import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { ExchangeContextProvider } from './context/exchangerate-context'

import ExchangeRateViewModel from './viewModel/ExchangeRateViewModel'

import styles from './app.module.scss'

const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ExchangeContextProvider>
        <div className={styles.app}>
          <ExchangeRateViewModel />
        </div>
      </ExchangeContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
