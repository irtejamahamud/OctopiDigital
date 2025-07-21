import { Link } from "react-router-dom";
import { useState } from "react";
import EditUserModal from "./EditUserModal";
import DeleteUserModal from "./DeleteUserModal";

export default function UserRow({ user }) {
  const [editOpen, setEditOpen] = useState(false);
  const [delOpen, setDelOpen] = useState(false);

  return (
    <>
      <tr className="border-b hover:shadow-lg hover:bg-white transition-shadow duration-200">
        <td className="p-4">
          <img
            src={user.image}
            alt={user.name}
            className="w-10 h-10 rounded-full object-cover"
          />
        </td>
        <td className="p-4 font-medium text-gray-800">{user.name}</td>
        <td className="p-4 text-gray-600">{user.email}</td>
        <td className="p-4 text-gray-600">{user.nationality}</td>
        <td className="p-4 flex space-x-2">
          <Link
            to={`/user/${user.id}`}
            className="px-3 py-1 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow hover:from-blue-600 hover:to-blue-700 transition"
          >
            View
          </Link>
          <button
            onClick={() => setEditOpen(true)}
            className="px-3 py-1 rounded-md bg-gradient-to-r from-green-400 to-green-500 text-white shadow hover:from-green-500 hover:to-green-600 transition"
          >
            Edit
          </button>
          <button
            onClick={() => setDelOpen(true)}
            className="px-3 py-1 rounded-md bg-gradient-to-r from-red-400 to-red-500 text-white shadow hover:from-red-500 hover:to-red-600 transition"
          >
            Delete
          </button>
        </td>
      </tr>

      {editOpen && (
        <EditUserModal user={user} onClose={() => setEditOpen(false)} />
      )}
      {delOpen && (
        <DeleteUserModal userId={user.id} onClose={() => setDelOpen(false)} />
      )}
    </>
  );
}
