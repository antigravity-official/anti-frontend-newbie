import { createContext } from "react";
import { ApiExchange } from "../../types/Type";

export const ExchangeData = createContext<ApiExchange | undefined>(undefined);
