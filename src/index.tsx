import App from "./App";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import React, { Suspense } from "react";
import { globalStyles, FallbackDiv } from "./styles/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Global styles={globalStyles} />
      <Suspense fallback={<FallbackDiv>loading...</FallbackDiv>}>
        <App />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
