import React, { createContext, useState } from "react";
export const BlogContext = createContext();

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
