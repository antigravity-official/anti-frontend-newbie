import React, { Suspense } from "react";
import EurInfoViewModel from "./viewModel/EurInfoViewModel";

export const App = () => {
  return (
    <Suspense fallback={<div>환율 정보를 로딩중입니다.</div>}>
      <div className="App">
        <EurInfoViewModel />
        <hr />
        <input /> 유로 ▶︎ <input disabled /> 원
      </div>
    </Suspense>
  );
};

export default App;
