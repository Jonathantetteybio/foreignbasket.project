import { createSlice, createSelector } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basket: [],
    basketTotal: 0,
    address: {},
  },

  reducers: {
    addToBasket(state, action) {
      state.basket.push({
        image: action.payload.image,
        price: action.payload.price,
        title: action.payload.title,
        id: action.payload.id,
      });
    },
    getBasketTotal(state, action) {
      state.basketTotal = action.payload.reduce(
        (amount, product) => amount + product.price,
        0
      );
    },
    removeProduct(state, action) {
      const updatedBasket = state.basket.filter((product) => {
        return product.id !== action.payload;
      });
      state.basket = updatedBasket;
    },

    setAdddress(state, action) {
      state.address = action.payload;
      console.log(action.payload);
    },
  },
});

export const { addToBasket, getBasketTotal, removeProduct, setAdddress } =
  basketSlice.actions;
export const basketReducer = basketSlice.reducer;

export const selectBasket = createSelector(
  (state) => state.basket,
  (basket) => basket.basket
);
export const selectAddress = createSelector(
  (state) => state.basket,
  (basket) => basket.address
);
export const selectTotal = createSelector(
  (state) => state.basket,
  (basket) => basket.basketTotal
);
