import { apiSlice } from "./apiSlice";

export const postsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "posts",
    }),
    getPost: builder.query({
      query: (id) => `posts/${id}`,
    }),
    createPost: builder.mutation({
      query: (data) => ({
        url: "posts",
        method: "POST",
        body: data,
      }),
    }),
    updatePost: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `posts/${id}`,
        method: "PUT",
        body: patch,
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;
