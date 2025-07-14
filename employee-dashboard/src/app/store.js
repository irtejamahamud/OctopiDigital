import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { usersApi } from "../features/users/usersApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
