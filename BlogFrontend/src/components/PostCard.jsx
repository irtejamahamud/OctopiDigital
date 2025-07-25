import React from "react";

export default function PostCard({ post, onLike, onComment }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 mb-6">
      <div className="flex items-center gap-2 mb-2">
        <span className="font-semibold text-blue-600">{post.username}</span>
      </div>
      <div className="text-xl font-bold text-gray-900 mb-2">{post.title}</div>
      <div className="text-gray-700 mb-4">{post.content}</div>
      <div className="flex gap-4 border-t pt-4 mt-4">
        <button
          className="px-4 py-2 rounded bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200 transition"
          onClick={() => onLike && onLike(post)}
        >
          👍 Like
        </button>
        <button
          className="px-4 py-2 rounded bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition"
          onClick={() => onComment && onComment(post)}
        >
          💬 Comment
        </button>
      </div>
    </div>
  );
}
