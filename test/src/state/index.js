import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  productId: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.product = action.payload;
      }
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
