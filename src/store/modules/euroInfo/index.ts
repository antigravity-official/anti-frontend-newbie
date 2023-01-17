import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getEuroInfo } from "apis";
import { EuroInfoType } from "types/euroInfo";

interface EuroInfoInitial {
  info: EuroInfoType;
  isLoading: boolean;
  error: string | undefined;
}

const initialState: EuroInfoInitial = {
  info: {
    basePrice: 0,
    changePrice: 0,
    cashBuyingPrice: 0,
    cashSellingPrice: 0,
    openingPrice: 0,
    ttBuyingPrice: 0,
    ttSellingPrice: 0,
  },
  isLoading: false,
  error: "",
};

export const getEuroData = createAsyncThunk(
  "EuroInfo/getEuroInfo",
  async () => {
    try {
      const data = await getEuroInfo();
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);

const EuroInfoSlice = createSlice({
  name: "EuroInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEuroData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEuroData.fulfilled, (state, action) => {
        state.info = action.payload as EuroInfoType;
        state.isLoading = false;
      })
      .addCase(getEuroData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default EuroInfoSlice.reducer;
