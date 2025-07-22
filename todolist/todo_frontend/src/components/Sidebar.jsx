import { useState } from "react";
import { FaTasks, FaCheck, FaClock, FaUserCog } from "react-icons/fa";

const items = [
  { label: "All Tasks", value: "all", icon: <FaTasks /> },
  { label: "Pending", value: "active", icon: <FaClock /> },
  { label: "Completed", value: "completed", icon: <FaCheck /> },
  { label: "Profile", value: "profile", icon: <FaUserCog /> },
];

export default function Sidebar({ filter, setFilter }) {
  return (
    <aside className="fixed top-0 left-0 h-screen bg-white shadow w-56 p-6 flex flex-col gap-2">
      <div className="text-2xl font-bold text-blue-500 mb-6">Taskify</div>
      {items.map((item) => (
        <button
          key={item.value}
          onClick={() => setFilter(item.value)}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg text-lg hover:bg-blue-50 transition ${
            filter === item.value
              ? "bg-blue-100 text-blue-700 font-semibold"
              : "text-gray-600"
          }`}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </aside>
  );
}
