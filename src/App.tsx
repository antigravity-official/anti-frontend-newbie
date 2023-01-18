import React, { Suspense } from "react";
import EurInfo from "./viewModel/EurInfo";

export const App = () => {
  return (
    <Suspense fallback={<div>환율 정보를 로딩중입니다.</div>}>
      <div className="App">
        <EurInfo />
      </div>
    </Suspense>
  );
};

export default App;
