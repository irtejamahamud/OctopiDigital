// src/components/PostModal.jsx
import React from "react";

export default function PostModal({ post, onClose }) {
  if (!post) return null;

  return (
    <div
      className="fixed inset-0 bg-transparent backdrop-blur-md shadow-md hover:border border-amber-300 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">{post.body}</p>
        <div className="text-sm text-gray-500 flex justify-between">
          <span>User ID: {post.userId}</span>
          <span>Post ID: {post.id}</span>
        </div>
      </div>
    </div>
  );
}
