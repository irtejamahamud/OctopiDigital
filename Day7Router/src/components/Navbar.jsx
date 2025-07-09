import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="bg-gray-800 py-4">
    <div className="container mx-auto px-6 flex items-center justify-between">
      {/* Left links */}
      <ul className="flex space-x-8">
        {[
          { to: "/", label: "Home", end: true },
          { to: "/about", label: "About" },
          { to: "/dashboard", label: "Dashboard" },
          { to: "/blog", label: "Blog"},
        ].map(({ to, label, end }) => (
          <li key={label}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive
                    ? "text-amber-500"
                    : "text-gray-200 hover:text-amber-400"
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right links (Login / Signup buttons) */}
      <div className="flex space-x-4">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `px-4 py-2 font-medium rounded transition-colors ${
              isActive
                ? "text-white bg-amber-500"
                : "text-gray-200 hover:text-amber-400"
            }`
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `px-4 py-2 font-medium rounded transition-colors ${
              isActive
                ? "text-white bg-amber-500"
                : "text-gray-200 hover:text-amber-400"
            }`
          }
        >
          Signup
        </NavLink>
      </div>
    </div>
  </nav>
);
 