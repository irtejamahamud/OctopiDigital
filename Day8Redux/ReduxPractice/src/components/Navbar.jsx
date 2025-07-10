import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 space-x-4">
      <Link to="/" className="hover:underline">
        Counter
      </Link>
      <Link to="/posts" className="hover:underline">
        Posts
      </Link>
    </nav>
  );
}
