import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import EurCtxProvider from "./data-access/context/eurCtx";

ReactDOM.render(
  <React.StrictMode>
    <EurCtxProvider>
      <App />
    </EurCtxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
