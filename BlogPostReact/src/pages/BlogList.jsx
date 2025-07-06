// src/pages/BlogList.jsx
import React, { useEffect, useContext } from "react";
import axios from "axios";
import { BlogContext } from "../context/BlogContext";
import SearchBar from "../components/SearchBar";
import BlogCard from "../components/BlogCard";

export default function BlogList() {
  const { posts, setPosts, searchTerm, userIdFilter, postIdFilter } =
    useContext(BlogContext);

  useEffect(() => {
    if (posts.length === 0) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => setPosts(res.data))
        .catch((err) => console.error(err));
    }
  }, [posts, setPosts]);

  if (posts.length === 0) {
    return <p className="p-8 text-center">Loading posts…</p>;
  }

  const filtered = posts
    .filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((p) => userIdFilter === "" || p.userId === Number(userIdFilter))
    .filter((p) => postIdFilter === "" || p.id === Number(postIdFilter));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-center font-bold mb-6">All Fatched Posts</h1>
      <SearchBar />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
