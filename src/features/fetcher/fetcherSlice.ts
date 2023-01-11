import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../component/Index";

export const fetchAPI = createAsyncThunk(
    'fetcher/fetcherSlice',
    async () => {
        await axios.get(`https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR`)
            .then((res) => {
                console.log("data test : ", res.data[0]);
            })
        const response = await axios.get(`https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR`)
        return response.data[0];
    }
);

export const fetcherSlice = createSlice({
    name: 'fetcher',
    initialState: {
        data: '',
        basePrice: '',
        openingPrice: '',
        cashBuyingPrice: '',
        cashSellingPrice: '',
        ttSellingPrice: '',
        ttBuyingPrice: '',
        changePrice: '',
        loading: true,
    } as RootState,
    reducers: {},
    extraReducers: {
        [fetchAPI.fulfilled.type]: (state, action) => {
            state.data = action.payload;
            state.basePrice = action.payload.basePrice;
            state.openingPrice = action.payload.openingPrice;
            state.cashBuyingPrice = action.payload.cashBuyingPrice;
            state.cashSellingPrice = action.payload.cashSellingPrice;
            state.ttSellingPrice = action.payload.ttSellingPrice;
            state.ttBuyingPrice = action.payload.ttBuyingPrice;
            state.changePrice = action.payload.changePrice;
            state.loading = false;
            console.log("collect!")
        },
        [fetchAPI.pending.type]: (state, action) => {
            state.loading = true;
            console.log("pending!")
        },
        [fetchAPI.rejected.type]: (state, action) => {
            state.loading = true;
            console.log("rejected!")
        }
    }
})

export default fetcherSlice.reducer;

