import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex space-x-4 p-4 bg-gray-100 justify-center">
        <li>
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-blue-600">
            Login
          </Link>
        </li>
        <li>
          <Link to="/settings" className="hover:text-blue-600">
            Settings
          </Link>
        </li>
        <li>
          <Link to="/dashboard/home" className="hover:text-blue-600">
            Dashboard Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}
