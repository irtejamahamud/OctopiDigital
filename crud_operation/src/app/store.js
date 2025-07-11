// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../features/users/usersApiSlice";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
