import React, { useState } from "react";
import {
  useGetPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} from "../services/api";

export default function Posts() {
  const { data = [], isLoading, error } = useGetPostsQuery();
  const [addPost] = useAddPostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  const [form, setForm] = useState({ title: "", body: "", id: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      updatePost(form);
    } else {
      addPost({ ...form, userId: 1 });
    }
    setForm({ title: "", body: "", id: null });
  };

  const startEdit = (post) => {
    setForm(post);
  };

  if (isLoading) return <p className="p-4 text-gray-600">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error fetching posts</p>;

  return (
    <div className="p-6 max-w-2xl font-mono mx-auto">
      <h1 className="text-3xl text-center  font-semibold mb-6 text-gray-800">
        Posts Manager
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-8 bg-white p-4 rounded-xl shadow space-y-4 border border-gray-200"
      >
        <input
          type="text"
          placeholder="Title"
          className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Body"
          className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.body}
          onChange={(e) => setForm({ ...form, body: e.target.value })}
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded hover:from-blue-600 hover:to-blue-800 transition"
        >
          {form.id ? "Update Post" : "Add Post"}
        </button>
      </form>

      {/* Post List */}
      <ul className="space-y-6">
        {data.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="bg-white p-4 rounded-xl shadow border border-gray-100 hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg text-gray-800">
              {post.title}
            </h3>
            <p className="text-gray-600 mt-1">{post.body}</p>
            <div className="mt-4 flex gap-2">
              <button
                className="text-sm bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1.5 rounded transition"
                onClick={() => startEdit(post)}
              >
                Edit
              </button>
              <button
                className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded transition"
                onClick={() => deletePost(post.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
