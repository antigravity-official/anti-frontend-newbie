import React from "react";
import { EuroInfoType } from "./types/euroInfoType";
import { InitialData } from "./const";

const AppContext = React.createContext<EuroInfoType>(InitialData);

export default AppContext;
