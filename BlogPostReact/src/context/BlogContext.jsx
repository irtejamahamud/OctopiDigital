// src/context/BlogContext.jsx
import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [userIdFilter, setUserIdFilter] = useState(""); // NEW
  const [postIdFilter, setPostIdFilter] = useState(""); // NEW

  return (
    <BlogContext.Provider
      value={{
        posts,
        setPosts,
        searchTerm,
        setSearchTerm,
        userIdFilter,
        setUserIdFilter,
        postIdFilter,
        setPostIdFilter,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}
