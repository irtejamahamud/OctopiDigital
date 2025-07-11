import { useDeleteUserMutation } from "../features/users/usersApiSlice";

export default function DeleteUserModal({ userId, onClose }) {
  const [deleteUser, { isLoading }] = useDeleteUserMutation();

  const handleDelete = async () => {
    await deleteUser(userId).unwrap();
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <p>Are you sure you want to delete?</p>
        <button
          disabled={isLoading}
          onClick={handleDelete}
          className="btn-danger"
        >
          Delete
        </button>
        <button onClick={onClose} type="button">
          Cancel
        </button>
      </div>
    </div>
  );
}
