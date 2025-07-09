// src/layouts/AdminLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AdminHeader from "../components/AdminHeader";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 border-r">
        <Sidebar />
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-grow">
        <AdminHeader />

        <main className="flex-grow p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
