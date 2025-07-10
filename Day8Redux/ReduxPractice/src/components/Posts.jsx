import React, { useState } from "react";
import {
  useGetPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} from "../services/api";
import Modal from "./Modal";

export default function Posts() {
  const { data = [], isLoading, error } = useGetPostsQuery();
  const [addPost] = useAddPostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  const [form, setForm] = useState({ title: "", body: "", id: null });
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      updatePost(form);
    } else {
      addPost({ ...form, userId: 1 });
    }
    closeForm();
  };

  const openAddForm = () => {
    setForm({ title: "", body: "", id: null });
    setModalOpen(true);
  };

  const startEdit = (post) => {
    setForm(post);
    setModalOpen(true);
  };

  const closeForm = () => {
    setModalOpen(false);
    setForm({ title: "", body: "", id: null });
  };

  if (isLoading) return <p className="p-4 text-gray-600">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error fetching posts</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Posts</h1>
        <button
          onClick={openAddForm}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Add Post
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeForm}>
        <h2 className="text-xl font-semibold mb-4">
          {form.id ? "Edit Post" : "Add New Post"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Title"
            className="w-full border border-gray-300 px-3 py-2 rounded"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
          <textarea
            placeholder="Body"
            className="w-full border border-gray-300 px-3 py-2 rounded"
            value={form.body}
            onChange={(e) => setForm({ ...form, body: e.target.value })}
            required
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={closeForm}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
            >
              {form.id ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </Modal>

      <ul className="space-y-4 mt-4">
        {data.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="bg-white p-4 rounded-xl shadow border border-gray-100"
          >
            <h3 className="font-semibold text-lg text-gray-800">
              {post.title}
            </h3>
            <p className="text-gray-600 mt-1">{post.body}</p>
            <div className="mt-4 flex gap-2">
              <button
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1.5 rounded"
                onClick={() => startEdit(post)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded"
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
