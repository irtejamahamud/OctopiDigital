// src/components/BlogCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  const { id, userId, title, body } = post;
  // take first 12 chars of body
  const excerpt = body.length > 12 ? `${body.slice(0, 12)}…` : body;

  return (
    <div className="group bg-white rounded-xl p-6 mb-6 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
      <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h2>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <div className="text-xs text-gray-400 mb-4">
        <span>User: {userId}</span> | <span>ID: {id}</span>
      </div>
      <Link to={`/posts/${id}`}>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-300 transition">
          Read more
        </button>
      </Link>
    </div>
  );
}
