import { createContext, ReactNode, useMemo } from 'react'
import { useQuery } from 'react-query'

interface Children {
  children: ReactNode
}

const initialState = {
  basePrice: 0,
  cashSellingPrice: 0,
  openingPrice: 0,
  changePrice: 0,
  ttSellingPrice: 0,
  ttBuyingPrice: 0,
  cashBuyingPrice: 0,
}

export const ExchangeContext = createContext({
  data: initialState,
  isFetching: false,
})

export const ExchangeContextProvider = ({ children }: Children) => {
  const { isFetching, data } = useQuery('exchangeData', async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json().then((array) => array[0])
  })

  const fetchData = useMemo(() => ({ data, isFetching }), [data, isFetching])

  return <ExchangeContext.Provider value={fetchData}>{children}</ExchangeContext.Provider>
}
