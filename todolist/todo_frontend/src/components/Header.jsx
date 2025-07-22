import { FaSearch, FaUserCircle } from "react-icons/fa";

export default function Header({ search, setSearch }) {
  return (
    <header className="flex items-center justify-between px-10 py-5 bg-white shadow-md rounded-b-2xl sticky top-0 z-20">
      <div className="text-2xl font-extrabold tracking-tight text-blue-700">
        
      </div>
      <div className="flex items-center gap-6">
        <div className="relative">
          <input
            className="pl-10 pr-3 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-200 w-64 transition"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
        </div>
        <button className="focus:outline-none hover:scale-110 transition">
          <FaUserCircle
            className="text-3xl text-blue-500"
            title="User profile"
          />
        </button>
      </div>
    </header>
  );
}
