import React, { createContext, useState } from "react";

// 1. Create the Context
export const BlogContext = createContext();

// 2. Create and export the Provider
export function BlogProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BlogContext.Provider
      value={{ posts, setPosts, searchTerm, setSearchTerm }}
    >
      {children}
    </BlogContext.Provider>
  );
}
