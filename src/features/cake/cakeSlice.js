import { createSlice } from "@reduxjs/toolkit";

const initialCakeState = {
  numberOfCake: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState: initialCakeState,
  reducers: {
    cakeOrder: (state) => {
      state.numberOfCake--;
    },
    cakeRestocked: (state, action) => {
      state.numberOfCake += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { cakeOrder, cakeRestocked } = cakeSlice.actions;
