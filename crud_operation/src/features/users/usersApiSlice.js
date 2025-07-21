import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api", // Updated to your local backend
    // For production: baseUrl: "https://your-backend-url/api"
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      transformResponse: (rawResponse) => {
        // Simplified
        const list = Array.isArray(rawResponse)
          ? rawResponse
          : rawResponse.data && Array.isArray(rawResponse.data)
          ? rawResponse.data
          : rawResponse.users && Array.isArray(rawResponse.users)
          ? rawResponse.users
          : [];
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
      transformResponse: (raw) => ({
        ...raw,
        id: raw._id ?? raw.id,
      }),
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
