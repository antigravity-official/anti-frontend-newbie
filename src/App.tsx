import { useState } from "react";
import * as api from "./api/apiContext";

export const App = () => {
  return <api.ApiProvider />;
};

export default App;
