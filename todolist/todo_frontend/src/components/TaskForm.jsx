import { useState, useEffect } from "react";

export default function TaskForm({
  onSubmit,
  initialValue,
  btnLabel = "Add",
  onCancel,
  loading,
}) {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (initialValue) {
      setText(initialValue.text || "");
      setDueDate(initialValue.dueDate ? initialValue.dueDate.slice(0, 10) : "");
    }
  }, [initialValue]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (text.trim()) onSubmit({ text: text.trim(), dueDate });
        setText("");
        setDueDate("");
      }}
      className="flex flex-wrap gap-2 mb-4"
    >
      <input
        type="text"
        value={text}
        placeholder="Task title..."
        className="flex-1 min-w-[180px] px-3 py-2 rounded-xl border"
        onChange={(e) => setText(e.target.value)}
        required
        disabled={loading}
      />
      <input
        type="date"
        value={dueDate}
        className="px-3 py-2 rounded-xl border"
        onChange={(e) => setDueDate(e.target.value)}
        disabled={loading}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-600 transition"
        disabled={loading || !text.trim()}
      >
        {loading ? "..." : btnLabel}
      </button>
      {onCancel && (
        <button type="button" className="ml-2" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}
