import React from "react";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-16">
      <h1 className="text-3xl font-bold mb-4">404 – Page Not Found</h1>
      <Link to="/" className="text-blue-600 underline">
        Go back to Dashboard
      </Link>
    </div>
  );
}
