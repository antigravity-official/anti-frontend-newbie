import { useEffect } from "react";
import useEuroViewModel from "./viewModel/useEuroViewModel";
import Spinner from "./components/Spinner";
import InfoContent from "./view/InfoContent";
import InputContent from "./view/InputContent";
import AppContext from "./AppContext";

const App = () => {
  const { isReady, eurInfo, getEurInfo } = useEuroViewModel();

  useEffect(() => {
    getEurInfo();
  }, []);

  if (!isReady) {
    return <Spinner />;
  }

  return (
    <div className="App">
      <AppContext.Provider value={eurInfo}>
        <InfoContent />
        <hr />
        <InputContent />
      </AppContext.Provider>
    </div>
  );
};

export default App;
