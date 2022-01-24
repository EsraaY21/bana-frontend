import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseAPI } from '../baseAPI';
import axios from 'axios';

export const fetchAsyncProducts = createAsyncThunk(
  'products/fetchAsyncProducts',
  async (dispatch, getState) => {
    const response = await axios.get(`${baseAPI}products/`);
    return response.data;
  }
);

const initialState = {
  products: [],
  status: null,
};

// REDUCERS -------------------------------------------------------------

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncProducts.pending]: (state, action) => {
      state.status = 'loading';
    },

    [fetchAsyncProducts.fulfilled]: (state, action) => {
      state.status = 'success';
      state.products = action.payload;
    },

    [fetchAsyncProducts.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default productSlice.reducer;
