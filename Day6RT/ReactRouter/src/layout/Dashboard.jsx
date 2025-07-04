import Navbar from "../components/Navbar";
import { Link, Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <main className="flex justify-between">
      <div className="border border-red-500 w-10">
        <li>
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard/home" className="hover:text-blue-600">
            Dashboard Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard/kpi" className="hover:text-blue-600">
            Dashboard KPI
          </Link>
        </li>
      </div>
      <div className="border border-red-500">
        <Outlet />
      </div>
    </main>
  );
};

export default DashboardLayout;
