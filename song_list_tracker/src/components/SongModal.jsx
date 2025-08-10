import React, { useState, useEffect } from "react";

export default function SongModal({ isOpen, onClose, onSave, initialData }) {
  const [form, setForm] = useState({
    songlist: "",
    youtube: "",
    description: "",
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
    else setForm({ songlist: "", youtube: "", description: "" });
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4 text-indigo-600">
          {initialData ? "Update Song" : "Add Song"}
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSave(form);
          }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Songlist Name"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={form.songlist}
            onChange={(e) =>
              setForm((f) => ({ ...f, songlist: e.target.value }))
            }
            required
          />
          <input
            type="url"
            placeholder="YouTube URL"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={form.youtube}
            onChange={(e) =>
              setForm((f) => ({ ...f, youtube: e.target.value }))
            }
            required
          />
          <textarea
            placeholder="Description"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={form.description}
            onChange={(e) =>
              setForm((f) => ({ ...f, description: e.target.value }))
            }
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-pink-500 text-white font-semibold py-2 rounded transition"
          >
            {initialData ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
}
