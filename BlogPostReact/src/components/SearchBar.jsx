import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useContext(BlogContext);

  return (
    <input
      type="text"
      placeholder="Search posts by title…"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full mb-6 p-3 border rounded-md focus:outline-none focus:ring"
    />
  );
}
