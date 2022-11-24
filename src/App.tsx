import "../src/styles/globals.css";
import Loading from "./components/common/Loading";
import EurInfoContainer from "./components/EurInfoContainer";
import ExchangeInput from "./components/ExchangeInput";
import { useFetch } from "./hooks/useFetch";
import { exchangeViewModel } from "./viewModel/exchangeViewModel";

export const App = () => {
  const { isReady, eurInfo } = useFetch();
  const priceDetail = new exchangeViewModel(eurInfo);
  return (
    <main>
      <section>
        {!isReady || !eurInfo ? (
          <Loading />
        ) : (
          <>
            <EurInfoContainer priceDetail={priceDetail} />
            <ExchangeInput basePrice={eurInfo.basePrice} />
          </>
        )}
      </section>
    </main>
  );
};

export default App;
