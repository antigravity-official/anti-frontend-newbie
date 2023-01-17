import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import { globalStyles } from "./styles/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Global styles={globalStyles} />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
