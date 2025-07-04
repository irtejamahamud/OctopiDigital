import React, { useEffect, useContext } from "react";
import axios from "axios";
import { BlogContext } from "../context/BlogContext";
import SearchBar from "../components/SearchBar";
import BlogCard from "../components/BlogCard";

export default function BlogList() {
  const { posts, setPosts, searchTerm } = useContext(BlogContext);

  console.log("🔍 BlogList mounted, posts:", posts.length);

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

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-bold mb-4">
        Fetched Blog Posts
      </h1>
      <SearchBar />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
