import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
import getEurInfo from "./helper/fetch";
import { apiTypes } from "./types/types";
import Index from "./pages/Index";

export const App: React.FC = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<apiTypes | Record<string, never>>({});
  const [inputValue, setInputValue] = useState<number>(0);

  useEffect(() => {
    getEurInfo(setEurInfo, setReady);
    return () => {};
  }, []);

  if (!isReady) {
    return <Loading />;
  }
  
  return (
    <div className="App">
      <Index eurInfo={eurInfo} inputValue={inputValue} setInputValue={setInputValue}/>
    </div>
  );
};

export default App;
