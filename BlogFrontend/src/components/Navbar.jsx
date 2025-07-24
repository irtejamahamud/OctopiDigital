import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    setOpen(false);
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center shadow">
      <div className="font-extrabold text-xl tracking-tight">
        <Link to="/" className="hover:text-blue-400 transition">
          Blog
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        <Link
          to="/posts"
          className="px-3 py-2 rounded hover:bg-gray-800 transition"
        >
          Posts
        </Link>
        <Link
          to="/posts/new"
          className="px-3 py-2 rounded hover:bg-gray-800 transition"
        >
          New Post
        </Link>
        {!user ? (
          <>
            <Link
              to="/login"
              className="px-4 py-2 rounded bg-gray-100 text-gray-900 hover:bg-blue-600 hover:text-white border border-blue-600 font-semibold transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition text-white font-semibold"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-800 transition focus:outline-none"
              onClick={() => setOpen((o) => !o)}
            >
              <FaUserCircle size={26} className="text-blue-400" />
              <span className="hidden sm:inline">{user.username}</span>
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg py-2 z-50 animate-fadeIn text-gray-900">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100 transition"
                  onClick={() => setOpen(false)}
                >
                  <FaUserCircle className="inline mr-2 text-blue-500" />
                  Profile
                </Link>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 transition flex items-center"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt className="mr-2 text-red-500" />
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
