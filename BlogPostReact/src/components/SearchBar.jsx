// src/components/SearchBar.jsx
import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

export default function SearchBar() {
  const {
    searchTerm,
    setSearchTerm,
    userIdFilter,
    setUserIdFilter,
    postIdFilter,
    setPostIdFilter,
  } = useContext(BlogContext);

  const baseInputClasses = `
    w-full px-4 py-2
    bg-white rounded-full shadow-md
    border-2 border-gray-300
    focus:outline-none
    focus:border-current
    focus:ring-2 focus:ring-opacity-50
    transition
  `;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {/* Title Search */}
      <input
        type="text"
        placeholder="Search by title…"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`${baseInputClasses} focus:border-blue-300 focus:ring-blue-200`}
      />

      {/* User ID Search */}
      <input
        type="number"
        placeholder="Filter by User ID…"
        value={userIdFilter}
        onChange={(e) => setUserIdFilter(e.target.value)}
        className={`${baseInputClasses} focus:border-green-300 focus:ring-green-200`}
      />

      {/* Post ID Search */}
      <input
        type="number"
        placeholder="Filter by Post ID…"
        value={postIdFilter}
        onChange={(e) => setPostIdFilter(e.target.value)}
        className={`${baseInputClasses} focus:border-purple-300 focus:ring-purple-200`}
      />
    </div>
  );
}
