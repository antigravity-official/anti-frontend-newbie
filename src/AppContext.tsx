import React from "react";
import { EuroInfoType } from "./types/EuroInfoType";
import { InitialData } from "./const";

const AppContext = React.createContext<{ eurInfo: EuroInfoType }>({
  eurInfo: InitialData,
});

export default AppContext;
