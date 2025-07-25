import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByamount: (state, action) => {
      state.value += action.payload;
    },
    decrementByamount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  reset,
  incrementByamount,
  decrementByamount,
} = counterSlice.actions;
export default counterSlice.reducer;
