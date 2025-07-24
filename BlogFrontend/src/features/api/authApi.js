import { apiSlice } from "./apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "users",
        method: "POST",
        body: credentials,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "users/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getUser: builder.query({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGetUserQuery } =
  authApi;
