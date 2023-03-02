import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { contactsApi } from './contactsApi';
import { authApi } from './authApi';
import { authSlice } from './authSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    auth: authSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(contactsApi.middleware)
      .concat(authApi.middleware),
});
