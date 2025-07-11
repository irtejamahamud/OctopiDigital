import { Link } from "react-router-dom";
import { useState } from "react";
import EditUserModal from "./EditUserModal";
import DeleteUserModal from "./DeleteUserModal";

export default function UserRow({ user }) {
  const [editOpen, setEditOpen] = useState(false);
  const [delOpen, setDelOpen] = useState(false);

  return (
    <>
      <tr className="border-t">
        <td className="p-4">
          <img
            src={user.image}
            alt={user.name}
            className="w-10 h-10 rounded-full"
          />
        </td>
        <td className="p-4">{user.name}</td>
        <td className="p-4">{user.nationality}</td>
        <td className="p-4 space-x-2 text-blue-600">
          <Link to={`/user/${user.id}`}>View</Link>
          <button onClick={() => setEditOpen(true)}>Edit</button>
          <button onClick={() => setDelOpen(true)}>Delete</button>
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
