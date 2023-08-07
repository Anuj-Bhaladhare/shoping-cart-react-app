import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState, // Make sure to define initialState
  reducers: {
    add: () => {
      // Implement logic to add item to cart
    },
    remove: () => {
      // Implement logic to remove item from cart
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
