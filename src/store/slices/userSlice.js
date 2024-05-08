import { createSlice, createSelector } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    fullName: '',
    email: '',
  },
  reducers: {
    setUser(state) {
      const user = JSON.parse(localStorage.getItem('user'));
      state.fullName = user.fullName;
      state.email = user.email;
    },
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;

export const selectEmail = createSelector(
  (state) => state.user,
  (user) => user.email
);

export const selectFullname = createSelector(
  (state) => state.user,
  (user) => user.fullName
);
