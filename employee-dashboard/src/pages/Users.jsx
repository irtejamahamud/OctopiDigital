import React from "react";
import { useGetUsersQuery } from "../features/users/usersApi";

function stringToColor(str) {
  // Simple hash to pastel color
  let hash = 0;
  for (let i = 0; i < str.length; i++)
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  const h = Math.abs(hash) % 360;
  return `hsl(${h},70%,85%)`;
}
function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function Users() {
  const { data: users, isLoading, error } = useGetUsersQuery();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 tracking-tight">Employees</h1>
      {isLoading && <div className="text-gray-500">Loading users...</div>}
      {error && <div className="text-red-500">Failed to load users.</div>}

      {!isLoading && users?.length === 0 && (
        <div className="text-gray-500">No users found.</div>
      )}

      {users && users.length > 0 && (
        <div className="overflow-x-auto m-2 rounded-2xl shadow-lg bg-white">
          <table className="min-w-full px-3 py-1 border-separate border-spacing-y-2">
            <thead className="bg-blue-50 rounded">
              <tr>
                <th className="p-4 text-left font-bold text-gray-600 rounded-l-xl">
                  #
                </th>
                <th className="p-4 text-left font-bold text-gray-600">Name</th>
                <th className="p-4 text-left font-bold text-gray-600">Role</th>
                <th className="p-4 text-left font-bold text-gray-600 rounded-r-xl">
                  Team
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, idx) => (
                <tr
                  key={u.id}
                  className="group hover:scale-[1.01] hover:shadow-md transition rounded-xl bg-gray-50 hover:bg-blue-50"
                  style={{ boxShadow: "0 1px 2px rgba(20, 80, 200, 0.03)" }}
                >
                  <td className="p-4 rounded-l-xl text-gray-500 text-sm">
                    {idx + 1}
                  </td>
                  <td className="p-4 flex items-center gap-3 font-medium">
                    {/* Avatar with initials */}
                    <span
                      className="w-10 h-10 flex items-center justify-center rounded-full text-base font-bold shadow"
                      style={{
                        background: stringToColor(u.name),
                        color: "#225",
                        border: "1.5px solid #fff",
                      }}
                    >
                      {getInitials(u.name)}
                    </span>
                    {u.name}
                  </td>
                  <td className="p-4 capitalize text-sm font-semibold text-blue-700">
                    {u.role}
                  </td>
                  <td className="p-4 rounded-r-xl text-gray-700 text-sm">
                    {u.team}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
