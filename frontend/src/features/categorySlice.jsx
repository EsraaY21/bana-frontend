import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import baseAPI from '../baseAPI';

export const fetchAsyncCategories = createAsyncThunk(
  'categories/fetchAsyncCategories',
  async (dispatch, getState) => {
    const response = await baseAPI.get('/categories');
    return response.data;
  }
);

const initialState = {
  categories: [],
  status: null,
};

// REDUCERS -------------------------------------------------------------

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncCategories.pending]: (state, action) => {
      state.status = 'loading';
    },

    [fetchAsyncCategories.fulfilled]: (state, action) => {
      state.status = 'success';
      state.categories = action.payload;
    },

    [fetchAsyncCategories.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default categorySlice.reducer;
