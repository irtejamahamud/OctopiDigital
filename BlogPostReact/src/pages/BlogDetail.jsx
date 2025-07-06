import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import sampleImg from "../assets/static.jpg";

export default function BlogDetail() {
  const { id } = useParams();
  const { posts } = useContext(BlogContext);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const found = posts.find((p) => p.id === Number(id));
    if (found) setPost(found);
    else {
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
      <Link
        to="/"
        className="inline-block mb-6 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        ← Back to Posts
      </Link>
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
        <img
          src={sampleImg}
          alt={post.title}
          className="w-full h-64 object-cover"
        />

        {/* Content */}
        <div className="p-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-400">54 Minutes Ago</span>
            <div className="flex space-x-4 text-gray-400">
              <button className="hover:text-red-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.172 5.172a4 4 0 015.657 0L12 
                       8.343l3.172-3.171a4 4 0 115.656 
                       5.656L12 21.657l-8.828-8.829a4 4 
                       0 010-5.656z"
                  />
                </svg>
              </button>
              <button className="hover:text-blue-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 8l4 4m0 0l-4 4m4-4H9"
                  />
                </svg>
              </button>
            </div>
          </div>


          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-700 leading-relaxed mb-6">{post.body}</p>

          <div className="flex justify-between text-sm text-gray-500">
            <span>User: {post.userId}</span>
            <span>Post: {post.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
