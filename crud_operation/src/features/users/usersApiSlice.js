// src/features/users/usersApiSlice.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wesoftin-backend.vercel.app",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users?sort=asc",
      transformResponse: (rawResponse) => {
        // 1) inspect the raw payload
        console.log("🥩 rawResponse from /users:", rawResponse);
        // 2) try to find the array on rawResponse
        const list =
          // if they give you an array directly
          Array.isArray(rawResponse)
            ? rawResponse
            : // or if they wrap it in `data`
            rawResponse.data && Array.isArray(rawResponse.data)
            ? rawResponse.data
            : // or if they wrap it in `users`
            rawResponse.users && Array.isArray(rawResponse.users)
            ? rawResponse.users
            : // otherwise, assume they did something else – use empty
              [];

        // 3) normalize each item so you get `id` instead of `_id`
        return list.map((u) => ({
          ...u,
          id: u._id ?? u.id,
        }));
      },
      providesTags: (result = []) => [
        { type: "User", id: "LIST" },
        ...result.map((user) => ({ type: "User", id: user.id })),
      ],
    }),

    getUser: builder.query({
      query: (id) => `/users/${id}`,
      transformResponse: (raw) => {
        console.log("🥩 raw single user:", raw);
        return { ...raw, id: raw._id ?? raw.id };
      },
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),

    addUser: builder.mutation({
      query: (newUser) => ({
        url: "/users",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),

    updateUser: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "User", id }],
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "User", id }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;
