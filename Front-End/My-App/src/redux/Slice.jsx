import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numReturns: 1
};

export const returnsSlice = createSlice({
  name: "returns",
  initialState,
  reducers: {
    setNumReturns: (state, action) => {
      state.numReturns = action.payload;
      console.log(state.numReturns);
    }
  }
});

export const { setNumReturns } = returnsSlice.actions;

export default returnsSlice.reducer;
