import React from "react";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <aside className="w-60 h-screen bg-gray-800 text-gray-200 flex flex-col p-6">
      <h2 className="text-2xl font-semibold mb-8">Admin Panel</h2>
      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/dashboard"
              end // ← ensure exact match
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-amber-500 text-white"
                    : "hover:bg-gray-700 hover:text-white"
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/adminuser"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-amber-500 text-white"
                    : "hover:bg-gray-700 hover:text-white"
                }`
              }
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              end // also exact for home
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md mt-auto transition-colors ${
                  isActive
                    ? "bg-amber-500 text-white"
                    : "hover:bg-gray-700 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminNavbar;
