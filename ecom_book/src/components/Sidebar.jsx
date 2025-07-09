import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const baseClasses = "block px-4 py-2 rounded hover:bg-gray-200";
  const activeClasses = "bg-gray-300 font-semibold";

  return (
    <nav className="p-4 space-y-2">
      <NavLink
        to="/admin"
        end
        className={({ isActive }) =>
          `${baseClasses} ${isActive ? activeClasses : ""}`
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/admin/books"
        className={({ isActive }) =>
          `${baseClasses} ${isActive ? activeClasses : ""}`
        }
      >
        Manage Books
      </NavLink>
      <NavLink
        to="/admin/orders"
        className={({ isActive }) =>
          `${baseClasses} ${isActive ? activeClasses : ""}`
        }
      >
        Manage Orders
      </NavLink>
      <NavLink
        to="/admin/users"
        className={({ isActive }) =>
          `${baseClasses} ${isActive ? activeClasses : ""}`
        }
      >
        Manage Users
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${baseClasses} ${isActive ? activeClasses : ""}`
        }
      >
        Home
      </NavLink>
    </nav>
  );
}
