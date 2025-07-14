import React from "react";
import { useSelector } from "react-redux";
import { useGetUsersQuery } from "../features/users/usersApi";

export default function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  const { data: users, isLoading, error } = useGetUsersQuery();

  let totalEmployees = 0;
  if (users) totalEmployees = users.length;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">
        Welcome, {user?.name || "User"}!
      </h1>
      <p className="mb-6">
        Role: <span className="font-semibold">{user?.role}</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-lg font-semibold mb-2">Total Employees</h2>
          {isLoading ? (
            <div className="animate-pulse h-7 bg-gray-200 rounded" />
          ) : error ? (
            <div className="text-red-600">Failed to load</div>
          ) : (
            <div className="text-2xl font-bold text-blue-600">
              {totalEmployees}
            </div>
          )}
        </div>
        {/* You can add more KPI cards here, e.g. Attendance, Leaves, by creating APIs for them */}
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-lg font-semibold mb-2">Attendance Today</h2>
          <div className="text-2xl font-bold text-green-600">--</div>
        </div>
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-lg font-semibold mb-2">Pending Leaves</h2>
          <div className="text-2xl font-bold text-yellow-600">--</div>
        </div>
      </div>
    </div>
  );
}
