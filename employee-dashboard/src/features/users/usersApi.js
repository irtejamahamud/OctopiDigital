import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// This fetches from public/data/users.json
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/data/" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users.json",
    }),
    // You can add more endpoints here later
  }),
});

export const { useGetUsersQuery } = usersApi;
