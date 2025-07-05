// src/components/BlogCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import sampleImg from "../assets/static.jpg"; // put your image here

export default function BlogCard({ post }) {
  const { id, userId, title, body } = post;
  const excerpt = body.length > 100 ? `${body.slice(0, 100)}…` : body;

  return (
    <div className="relative flex bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200 mb-8">
      {/* Left: Image */}
      <div className="w-1/3">
        <img
          src={sampleImg}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right: Content */}
      <div className="w-2/3 p-6 flex flex-col justify-between">
        {/* Top row: timestamp & icons */}
        <div className="flex justify-between items-start">
          <span className="text-xs text-gray-400">54 Minutes Ago</span>
          <div className="flex space-x-4 text-gray-400">
            {/* Heart icon */}
            <button className="hover:text-red-500 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 
                     116.364 6.364L12 21.682l-7.682-7.682a4.5 4.5 0 010-6.364z"
                />
              </svg>
            </button>
            {/* Share icon */}
            <button className="hover:text-blue-500 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 8a3 3 0 11-2.83-4h.09M6.82 4a3 3 0 103.36 4H9.09
                     M8.21 21l7.58-7.59M8.21 3l7.58 7.59"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Title & excerpt */}
        <div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{excerpt}</p>
        </div>

        {/* Footer: user/post IDs and button */}
        <div className="flex justify-between items-center">
          <div className="text-xs text-gray-400">
            <span>User: {userId}</span> | <span>ID: {id}</span>
          </div>
          <Link to={`/posts/${id}`}>
            <button
              className="px-6 py-2 bg-blue-600 text-white rounded-full 
                               hover:bg-blue-700 transition-colors"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
