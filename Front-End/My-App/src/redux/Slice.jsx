import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numReturns: 0,
  returncount:null
};

export const returnsSlice = createSlice({
  name: "returns",
  initialState,
  reducers: {
    setNumReturns: (state, action) => {
      state.numReturns = action.payload;
      console.log(state.numReturns);
    },
    totalReturns: (state, action) => {
      state.returncount = action.payload;
      
    }
  }
});

export const { setNumReturns ,totalReturns} = returnsSlice.actions;

export default returnsSlice.reducer;
