import { createSlice } from "@reduxjs/toolkit";

const initialIceCreamState = {
  numberOfIceCream: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState: initialIceCreamState,
  reducers: {
    iceCreamOrder: (state) => {
      state.numberOfIceCream--;
    },
    iceCreamRestocked: (state, action) => {
      state.numberOfIceCream += action.payload;
    },
  },
});

export default iceCreamSlice.reducer;
export const { iceCreamOrder, iceCreamRestocked } = iceCreamSlice.actions;
