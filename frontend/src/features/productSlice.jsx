import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const API_URL = 'https://fakestoreapi.com/products';

const initialState = {
  loading: false,
  error: false,
  data: [],
};

// REDUCERS -------------------------------------------------------------

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    initFetchProducts: (state) => {
      state = { loading: true, error: false, data: [] };
    },

    successFetchProducts: (state, action) => {
      state.data = action.payload;
    },

    errorFetchProducts: () => {},

    addNewProduct: (state, action) => {
      state.data.push(action.payload);
    },

    removeProduct: () => {},

    updateProduct: () => {},
  },
});

// ACTIONS -------------------------------------------------------------

export const getAllProducts = (state) => state.products.data;

// EXPORT -------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {
  initFetchProducts,
  successFetchProducts,
  errorFetchProducts,
  addNewProduct,
  removeProduct,
  updateProduct,
} = productSlice.actions;

export default productSlice.reducer;
