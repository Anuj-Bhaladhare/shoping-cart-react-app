import { configureStore } from '@reduxjs/toolkit';
import CartSlice from "./slices/CartSlice"; // Make sure you export the reducer, not the entire slice

export const store = configureStore({
    reducer: {
        cart: CartSlice // Use the reducer, not the slice
    }
});
