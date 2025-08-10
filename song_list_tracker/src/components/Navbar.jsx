import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg py-4 px-8 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-white tracking-wide">SongList Tracker</span>
      </div>
      <ul className="flex gap-6 text-white font-medium">
        <li className="hover:text-pink-200 cursor-pointer transition">Home</li>
        <li className="hover:text-pink-200 cursor-pointer transition">Add Song</li>
        <li className="hover:text-pink-200 cursor-pointer transition">About</li>
      </ul>
    </nav>
  );
}
