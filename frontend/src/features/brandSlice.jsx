import { createSlice } from '@reduxjs/toolkit';
import { brands } from '../data';

const initialState = {
  value: brands,
  status: null,
};

// REDUCERS -------------------------------------------------------------

export const brandSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default brandSlice.reducer;
