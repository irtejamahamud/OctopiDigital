import React from "react";

const mockUsers = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Seeker",
    status: "Active",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    role: "Recruiter",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Carol Lee",
    email: "carol@example.com",
    role: "Seeker",
    status: "Active",
  },
];

export default function AdminUser() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page Header */}
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">Manage Users</h1>
          <p className="text-gray-600">
            View, activate, or deactivate user accounts.
          </p>
        </div>
        <button className="bg-amber-600 text-white px-4 py-2 rounded-md shadow hover:bg-amber-700 transition">
          + Add New User
        </button>
      </header>

      {/* Users Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockUsers.map((user, idx) => (
              <tr key={user.id} className={idx % 2 === 0 ? "" : "bg-gray-50"}>
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.role}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-sm ${
                      user.status === "Active"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-3 space-x-2">
                  <button className="text-amber-600 hover:underline">
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
