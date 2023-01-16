import useGetEurInfo from "./hooks/useGetEurInfo";
import { Loading } from "./components/UI"
import CurrencyController from "./view/CurrencyController";

export const App = () => {
  const { isLoading, data } = useGetEurInfo();

  if (isLoading) return <Loading />;
  
  return (
    <CurrencyController  data={data}  />
  );
};

export default App;
