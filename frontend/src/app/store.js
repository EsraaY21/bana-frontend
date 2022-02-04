import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productSlice';
import categoryReducer from '../features/categorySlice';
import cartReducer from '../features/cartSlice';
import brandReducer from '../features/brandSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
    brands: brandReducer,
    cart: cartReducer,
  },
});
