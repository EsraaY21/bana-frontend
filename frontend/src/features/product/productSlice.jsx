import { products } from '../../products';
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: false,
  value: [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    initFetchProducts: (state) => {
      state.value = { loading: true, error: false, value: [] };
    },
    successFetchProducts: (state, action) => {
      state.value = action.payload;
    },
    errorFetchProducts: () => {},
    addNewProduct: () => {},
    removeProduct: () => {},

    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

const getProducts = () => async (dispatch) => {
  try {
    // loading is true
    const { data } = axios.get('https://fakestoreapi.com/products');
    // success is true
  } catch (error) {
    // error is true
  }
};

// Action creators are generated for each case reducer function
export const { successFetchProducts } = productSlice.actions;

export default productSlice.reducer;
