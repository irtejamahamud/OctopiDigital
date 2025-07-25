import { useState } from "react";
import { useCreatePostMutation } from "../features/api/postsApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function PostFormPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [createPost, { isLoading }] = useCreatePostMutation();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!title.trim() || !content.trim()) {
      setError("Title and content are required.");
      return;
    }
    if (!user?._id) {
      setError("You must be logged in to create a post.");
      return;
    }

    try {
      await createPost({
        title,
        content,
        author: user._id,
      }).unwrap();
      navigate("/posts");
    } catch (err) {
      setError(err?.data?.error || "Failed to create post.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
        Create New Post
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={100}
            placeholder="Enter a catchy title"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="content">
            Content
          </label>
          <textarea
            id="content"
            className="w-full px-4 py-2 min-h-[150px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your thoughts here..."
            required
          />
        </div>
        {error && <div className="text-red-600 font-medium">{error}</div>}
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
          disabled={isLoading}
        >
          {isLoading ? "Posting..." : "Create Post"}
        </button>
      </form>
    </div>
  );
}
