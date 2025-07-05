// src/components/SearchBar.jsx
import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useContext(BlogContext);

  return (
    <div className="relative w-full mb-8">
      {/* Search icon */}
      <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1111.65 3a7.5 7.5 0 015.999 12.65z"
          />
        </svg>
      </span>

      <input
        type="text"
        placeholder="Search posts by title…"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
          w-full
          pl-12
          pr-4
          py-3
          bg-white
          rounded-full
          shadow-md
          border-2 border-transparent
          focus:outline-none
          focus:border-blue-300
          focus:ring-2 focus:ring-blue-200
          transition
        "
      />
    </div>
  );
}
