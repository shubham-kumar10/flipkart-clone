import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    selectedProduct: null,
  },
  reducers: {
    setProductList: (state, action) => {
      state.product = action.payload;
    },
    setProduct: (state, action) => {
      state.selectedProduct = state.product.find((el) => {
        return el.id === action.payload.id;
      });
      console.log(state.selectedProduct);
    },
  },
});

export const { setProductList, setProduct } = productSlice.actions;

export const getProduct = (state) => state.product.selectedProduct;

export default productSlice.reducer;
