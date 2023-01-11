import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
import getEurInfo from "./model/fetch";
import { apiTypes } from "./types/types";
import CurrInfo from './components/CurrInfo';
import InputBox from './components/InputBox';

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
      <CurrInfo eurInfo={eurInfo} />
      <hr />
      <InputBox
        inputValue={inputValue}
        setInputValue={setInputValue}
        eurInfo={eurInfo}
      />
    </div>
  );
};

export default App;
