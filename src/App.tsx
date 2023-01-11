import { QueryClient, QueryClientProvider } from 'react-query'
import { ExchangeContextProvider } from './context/exchangerate-context'

const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ExchangeContextProvider>
        <div className='App' />
      </ExchangeContextProvider>
    </QueryClientProvider>
  )
}

export default App
