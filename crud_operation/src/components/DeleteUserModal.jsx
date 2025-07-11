// src/components/DeleteUserModal.jsx
import React from "react";
import { useDeleteUserMutation } from "../features/users/usersApiSlice";

export default function DeleteUserModal({ userId, onClose }) {
  const [deleteUser, { isLoading }] = useDeleteUserMutation();

  const handleDelete = async () => {
    try {
      await deleteUser(userId).unwrap();
      onClose();
    } catch (err) {
      console.error("Delete failed: ", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-transparent/15 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4">Delete User</h2>
        <p className="mb-6">
          Are you sure you want to delete this user? This action cannot be
          undone.
        </p>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            disabled={isLoading}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:bg-red-400"
          >
            {isLoading ? "Deleting…" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
