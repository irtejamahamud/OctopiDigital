import React from "react";
import { useParams } from "react-router-dom";
import { useGetPostQuery } from "../features/api/postsApi";
import CommentList from "../components/CommentList";

export default function PostDetailPage() {
  const { id } = useParams();
  const { data: post, isLoading, error } = useGetPostQuery(id);

  if (isLoading) return <div className="p-8">Loading...</div>;
  if (error)
    return <div className="p-8 text-red-600">Failed to load post.</div>;
  if (!post) return <div className="p-8">Post not found.</div>;

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <div className="text-gray-600 mb-4">By {post.username}</div>
      <div className="mb-8 text-lg text-gray-800">{post.content}</div>
      <h2 className="text-xl font-semibold mb-2">Comments</h2>
      <CommentList comments={post.comments || []} />
    </div>
  );
}
