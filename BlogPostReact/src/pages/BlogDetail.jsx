import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

export default function BlogDetail() {
  const { id } = useParams();
  const { posts } = useContext(BlogContext);
  const [post, setPost] = useState(null);

  useEffect(() => {
    // try to find in context first
    const found = posts.find((p) => p.id === Number(id));
    if (found) {
      setPost(found);
    } else {
      // otherwise fetch single post
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => setPost(res.data))
        .catch((err) => console.error(err));
    }
  }, [id, posts]);

  if (!post) {
    return <p className="p-8 text-center">Loading post…</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to all posts
      </Link>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-6">{post.body}</p>
      <div className="text-sm text-gray-500">
        <span>User ID: {post.userId}</span> | <span>Post ID: {post.id}</span>
      </div>
    </div>
  );
}
