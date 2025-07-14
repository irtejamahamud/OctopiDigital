import React from "react";
import { useGetUsersQuery } from "../features/users/usersApi";

export default function Users() {
  const { data: users, isLoading, error } = useGetUsersQuery();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Employees</h1>
      {isLoading && <div className="text-gray-500">Loading users...</div>}
      {error && <div className="text-red-500">Failed to load users.</div>}

      {!isLoading && users?.length === 0 && (
        <div className="text-gray-500">No users found.</div>
      )}

      {users && users.length > 0 && (
        <div className="overflow-x-auto rounded shadow bg-white">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left font-semibold">ID</th>
                <th className="p-3 text-left font-semibold">Name</th>
                <th className="p-3 text-left font-semibold">Role</th>
                <th className="p-3 text-left font-semibold">Team</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-gray-50">
                  <td className="p-3">{u.id}</td>
                  <td className="p-3">{u.name}</td>
                  <td className="p-3 capitalize">{u.role}</td>
                  <td className="p-3">{u.team}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
