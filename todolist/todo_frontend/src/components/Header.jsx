import { FaSearch, FaUserCircle } from "react-icons/fa";
import { useState } from "react";

export default function Header({ search, setSearch }) {
  return (
    <header className="flex items-center justify-between px-8 py-5 bg-white shadow rounded-b-2xl sticky top-0 z-20">
      <div className="text-2xl font-bold text-blue-600">Taskify</div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            className="pl-10 pr-3 py-2 rounded-xl border focus:ring-2 w-64 transition"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        <FaUserCircle className="text-3xl text-blue-500" title="User profile" />
      </div>
    </header>
  );
}
