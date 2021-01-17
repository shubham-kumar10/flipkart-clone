import { configureStore, createReducer } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import cartReducer from "../features/cartSlice";
import productReducer from "../features/productSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    product: productReducer,
  },
});
