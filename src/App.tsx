import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { ExchangeContextProvider } from './context/exchangerate-context'

import ViewModel from './ViewModel'

const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ExchangeContextProvider>
        {/* <div className='App' /> */}
        <ViewModel />
      </ExchangeContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
