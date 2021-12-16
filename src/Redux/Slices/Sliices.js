import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./FetchData";

const initialState = {
  optionData: [],
};

export const OptionalSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    extraReducers: (builder) => {
      builder.addCase(fetchData.fulfilled, (state, action) => {
        state.state.optionData = action.payload;
      });
    },
  },
});

export const { increment } = OptionalSlice.actions;

export default OptionalSlice.reducer;
