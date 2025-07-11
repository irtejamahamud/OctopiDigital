// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 flex items-center justify-between py-4">
        {/* Brand */}
        <NavLink to="/" className="text-xl font-bold">
          Profile Manager
        </NavLink>

        {/* Add User button—with active styling */}
        <NavLink
          to="/add"
          className={({ isActive }) =>
            [
              "px-4 py-2 rounded",
              isActive
                ? "bg-blue-700 text-white"
                : "bg-blue-600 text-white hover:bg-blue-700",
            ].join(" ")
          }
        >
          Add User
        </NavLink>
      </div>
    </header>
  );
}
