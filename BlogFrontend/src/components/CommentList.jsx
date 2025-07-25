import React from "react";

export default function CommentList({ comments }) {
  if (!comments || comments.length === 0) {
    return <div className="text-gray-500">No comments yet.</div>;
  }
  return (
    <div className="mt-4">
      {comments.map((comment) => (
        <div
          key={comment._id || comment.id}
          className="mb-3 p-3 bg-gray-100 rounded"
        >
          <div className="font-semibold text-blue-600">{comment.username}</div>
          <div className="text-gray-800">{comment.content}</div>
        </div>
      ))}
    </div>
  );
}
