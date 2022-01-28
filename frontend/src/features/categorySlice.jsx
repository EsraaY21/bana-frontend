import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseAPI } from '../baseAPI';
import axios from 'axios';
import { categories } from '../data';

const initialState = {
  value: categories,
  status: null,
};

// REDUCERS -------------------------------------------------------------

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default categorySlice.reducer;
