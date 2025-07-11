import { useState } from "react";
import { useUpdateUserMutation } from "../features/users/usersApiSlice";

export default function EditUserModal({ user, onClose }) {
  const [form, setForm] = useState(user);
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(form).unwrap();
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <form onSubmit={handleSubmit} className="modal">
        {/* inputs bound to form.name, form.age… */}
        <button disabled={isLoading} type="submit" className="btn-primary">
          Save
        </button>
        <button onClick={onClose} type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}
