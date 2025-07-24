import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center">
      <div className="font-bold text-lg">
        <Link to="/">Blog</Link>
      </div>
      <div className="flex gap-4">
        <Link to="/posts">Posts</Link>
        <Link to="/posts/new">New Post</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}
