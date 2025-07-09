// src/layouts/AdminLayout.jsx
import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    // 1. Make this a flex container, full viewport height
    <div className="flex min-h-screen">
      {/* 2. Sidebar */}
      <AdminNavbar />

      {/* 3. Main content area */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
