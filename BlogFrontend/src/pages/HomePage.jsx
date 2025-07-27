import React from "react";

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">
        Welcome to the Knowlage Hub
      </h1>
      <p className="mb-8 text-gray-700">
        Discover posts, share your thoughts, and connect with others.
      </p>
      {/* You can render a list of posts here, e.g. <PostList /> */}
      <div className="text-gray-400 italic">
        No posts yet. Start by creating a new post!
      </div>
    </div>
  );
}
