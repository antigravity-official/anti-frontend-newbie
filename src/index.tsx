import App from "./App";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import React, { Suspense } from "react";
import { globalStyles } from "./styles/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Global styles={globalStyles} />
      <Suspense fallback={<div>loading...</div>}>
        <App />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
