// src/components/ui/Header.jsx
import { Link } from "react-router-dom";
import {
  ShoppingCartIcon,
  HeartIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">BookShop</span>
        </Link>

        {/* Search Bar */}
        <div className="flex flex-1 max-w-lg mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for books..."
              className="w-full border rounded-full pl-4 pr-12 py-2 focus:outline-none focus:ring"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white rounded-full p-2">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Nav Links + Icons */}
        <nav className="flex items-center space-x-6">
          <Link to="/catalog" className="hover:text-green-600">
            Catalog
          </Link>
          <Link to="/category" className="hover:text-green-600">
            Categories
          </Link>
          <Link to="/author" className="hover:text-green-600">
            Authors
          </Link>
          <Link to="/collection" className="hover:text-green-600">
            Collections
          </Link>
          <Link to="/book" className="hover:text-green-600">
            Books
          </Link>
          <Link to="/admin" className="hover:text-green-600">
            Admin
          </Link>

          {/* Icons */}
          <div className="flex items-center space-x-4 ml-4">
            <Link to="/cart" className="relative">
              <ShoppingCartIcon className="h-6 w-6 hover:text-green-600" />
            </Link>
            <Link to="/wishlist">
              <HeartIcon className="h-6 w-6 hover:text-green-600" />
            </Link>
            <Link to="/account">
              <UserCircleIcon className="h-6 w-6 hover:text-green-600" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
