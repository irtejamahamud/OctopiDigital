import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "../api/todosApi";

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(todosApi.middleware),
});
