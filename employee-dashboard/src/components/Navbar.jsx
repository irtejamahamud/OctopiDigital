import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  // Utility to get user initials
  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <header className="flex items-center justify-between px-8 py-3 bg-white/95 shadow-sm border-b">
      <div className="flex items-center gap-4">
        {/* Avatar Circle */}
        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow text-white font-bold text-lg">
          {getInitials(user.name)}
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-gray-800 leading-tight">
            {user.name}
          </span>
          <span className="text-xs text-gray-500 capitalize">{user.role}</span>
        </div>
      </div>
      <button
        onClick={handleLogout}
        className="px-5 py-2 ml-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow transition-colors duration-150"
      >
        Logout
      </button>
    </header>
  );
}
