import { useState, useEffect } from "react";

export default function TodoForm({ onSubmit, initialValue, loading }) {
  const [text, setText] = useState("");
  useEffect(() => {
    setText(initialValue || "");
  }, [initialValue]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (text.trim()) onSubmit(text.trim());
        setText("");
      }}
      className="flex gap-2"
    >
      <input
        type="text"
        value={text}
        className="flex-1 px-3 py-2 rounded-xl border focus:outline-none focus:ring-2"
        placeholder="What needs to be done?"
        onChange={(e) => setText(e.target.value)}
        disabled={loading}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-600 transition"
        disabled={loading || !text.trim()}
      >
        {loading ? "..." : initialValue ? "Update" : "Add"}
      </button>
    </form>
  );
}
