// src/components/BlogCard.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PostModal from "./PostModal";

export default function BlogCard({ post }) {
  const { id, userId, title, body } = post;
  const excerpt = body.length > 100 ? `${body.slice(0, 100)}…` : body;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="relative bg-amber-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 mb-8 h-[300px] border border-amber-200">
        {/* Content */}
        <div className="h-full px-6 pt-6 pb-4 flex flex-col justify-between">
          {/* Header */}
          <div className="flex justify-between items-start">
            <span className="text-xs text-gray-500">54 Minutes Ago</span>
            <button
              className="text-gray-500 hover:text-amber-600 transition-colors"
              onClick={() => setShowModal(true)}
            >
              {/* Eye icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 
                     5c4.478 0 8.268 2.943 9.542 
                     7-1.274 4.057-5.064 7-9.542 
                     7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
          </div>

          {/* Title & Excerpt */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-800 line-clamp-2">
              {title}
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center">
            <div className="text-xs text-gray-500">
              <span>User: {userId}</span> <span>ID: {id}</span>
            </div>
            {/* updated route to /blog/:id */}
            <Link to={`/blog/${id}`}>
              <button className="px-6 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <PostModal post={post} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
