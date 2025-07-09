import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export default function AdminHeader() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link to="/admin" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">BookShop</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search admin…"
              className="w-full border rounded-full pl-4 pr-12 py-2 focus:outline-none focus:ring"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white rounded-full p-2">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* User Icon */}
        <Link to="/admin/account">
          <UserCircleIcon className="h-8 w-8 hover:text-green-600" />
        </Link>
      </div>
    </header>
  );
}
