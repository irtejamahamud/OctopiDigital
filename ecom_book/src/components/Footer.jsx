import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-8">
      <div className="container mx-auto p-4 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} BookShop. All rights reserved.</p>
        <nav className="mt-2 space-x-2">
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/faq" className="hover:underline">
            FAQ
          </Link>
        </nav>
      </div>
    </footer>
  );
}
