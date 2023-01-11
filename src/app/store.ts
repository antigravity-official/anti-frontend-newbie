import { configureStore } from "@reduxjs/toolkit";
import fetcherSlice from "../features/fetcher/fetcherSlice";

export const store = configureStore({
    reducer: {
        fetcher: fetcherSlice
    },
})

export type AppDispatch = typeof store.dispatch
