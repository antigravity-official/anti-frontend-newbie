import useFetch from './hooks/useFetch';
import ExchangeData from './component/ExchangeData';
import ExchangeRate from './component/ExchangeRate';
import Loading from './component/Loading';

export const App = () => {
  const { isLoading, currencyInfo } = useFetch();

  if (isLoading) return <Loading />;

  return (
    <>
      {currencyInfo && (
        <>
          <ExchangeData currencyInfo={currencyInfo} />
          <ExchangeRate currencyInfo={currencyInfo} />
        </>
      )}
    </>
  );
};

export default App;
