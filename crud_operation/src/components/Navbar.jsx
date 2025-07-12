// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSearchChange = (e) => {
    const v = e.target.value;
    if (v) setSearchParams({ search: v });
    else setSearchParams({});
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 flex items-center justify-between py-4">
        {/* Brand */}
        <NavLink
          to="/"
          className="flex items-center text-2xl font-extrabold text-gray-800"
        >
          <FaUserCircle className="mr-2 text-indigo-600" size={28} />
          Profile Manager
        </NavLink>

        {/* desktop menu */}
        <div className="hidden sm:flex items-center space-x-4">
          {location.pathname === "/" && (
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search users..."
              className="w-64 bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          )}

          <NavLink
            to="/add"
            className={({ isActive }) =>
              [
                "inline-flex items-center px-5 py-2 rounded-full font-semibold shadow-md transition-transform transform",
                isActive
                  ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white"
                  : "bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600 hover:shadow-xl",
              ].join(" ")
            }
          >
            Add User
          </NavLink>
        </div>

        {/* mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="sm:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* mobile dropdown */}
      {mobileOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {location.pathname === "/" && (
              <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search users..."
                className="w-full bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              />
            )}
            <NavLink
              to="/add"
              onClick={() => setMobileOpen(false)}
              className="block text-center px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full font-semibold shadow-md"
            >
              Add New User
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
