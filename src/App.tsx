import { QueryClient, QueryClientProvider } from 'react-query'

const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div className='App' />
    </QueryClientProvider>
  )
}

export default App
