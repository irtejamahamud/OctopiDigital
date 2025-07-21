export default function TodoItem({
  todo,
  onDelete,
  onToggle,
  onEdit,
  editing,
  children,
}) {
  return (
    <div
      className={`flex items-center justify-between gap-2 p-4 rounded-xl shadow-sm mb-2 bg-white transition group ${
        todo.completed ? "opacity-70 line-through" : ""
      }`}
    >
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => onToggle(todo)}
        title="Toggle Complete"
      >
        <input
          type="checkbox"
          checked={todo.completed}
          readOnly
          className="accent-blue-500 w-5 h-5"
        />
        <span className="text-lg">{todo.text}</span>
      </div>
      <div className="flex items-center gap-2">
        {!editing && (
          <>
            <button
              className="text-blue-500 hover:underline text-sm"
              onClick={() => onEdit(todo)}
            >
              Edit
            </button>
            <button
              className="text-red-500 hover:underline text-sm"
              onClick={() => onDelete(todo)}
            >
              Delete
            </button>
          </>
        )}
        {editing && children}
      </div>
    </div>
  );
}
