import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/" }),
  endpoints: (builder) => ({
    getTodos: builder.query({ query: () => "todos" }),
    addTodo: builder.mutation({
      query: (todo) => ({ url: "todos", method: "POST", body: todo }),
    }),
    updateTodo: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `todos/${id}`,
        method: "PUT",
        body: patch,
      }),
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({ url: `todos/${id}`, method: "DELETE" }),
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todosApi;
