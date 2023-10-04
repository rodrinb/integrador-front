import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    calculateCart: (state, action) => {
      let total = 0;
      state.products.map((product) => {
        total += product.cant * product.price;
      });
      state.total = total
    },
    removeCart: (state, action) => {
      const result = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.products = result;
    },
    addCart: (state, action) => {
      let prod = {
        id: action.payload.id,
        image: action.payload.image,
        name: action.payload.title,
        description: action.payload.description,
        price: action.payload.price,
        cant: 1,
      };
      const results = state.products.filter(
        (product) => product.id === prod.id
      );
      if (results.length !== 0) {
        results[0].cant++;
      } else {
        state.products.push(prod);
      }
    },
  },
});

export const { addCart, removeCart, calculateCart } = cartSlice.actions;

export default cartSlice.reducer;
