import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseAPI } from '../baseAPI';
import axios from 'axios';
import getState from 'react';

const initialState = {
  value: [],
  status: null,
};

// REDUCERS -------------------------------------------------------------

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // cart_add_item(state, action) {
    //   const item = action.payload;
    //   if (state.cartItems.length > 0) {
    //     const itemAvailable = state.cartItems.find((x) => x.id === item.id);
    //     if (itemAvailable) {
    //       console.log('exist');
    //     } else {
    //       state.cartItems.push(action.payload);
    //     }
    //   } else {
    //     state.cartItems.push(action.payload);
    //     localStorage.setItem('cartItems', state.cartItems);
    //   }
    //   console.log(state.cartItems);
    // },
  },
});

export const { addCartItem } = cartSlice.actions;

export default cartSlice.reducer;
