import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      const index = state.cart.findIndex((el) => {
        return el.id === action.payload.id;
      });
      state.cart.splice(index, 0);
    },
    getCart: (state, action) => {
      return state.cart;
    },
  },
});

export const { addItem, deleteItem, getCart } = cartSlice.actions;

export const getCartItems = (state) => state.cart.cart;

export default cartSlice.reducer;
