import { configureStore } from '@reduxjs/toolkit';

import {
  basketReducer,
  addToBasket,
  getBasketTotal,
  removeProduct,
  setAdddress,
  selectBasket,
  selectAddress,
  selectTotal,
} from './slices/basketSlice';

import {
  userReducer,
  setUser,
  selectEmail,
  selectFullname,
} from './slices/userSlice';

const store = configureStore({
  reducer: {
    basket: basketReducer,
    user: userReducer,
  },
});

export {
  store,
  addToBasket,
  getBasketTotal,
  removeProduct,
  setAdddress,
  selectBasket,
  selectAddress,
  selectTotal,
  setUser,
  selectEmail,
  selectFullname,
};
