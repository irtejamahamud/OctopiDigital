import { FaRegEdit, FaTrash, FaCheckCircle, FaRegCircle } from "react-icons/fa";
import dayjs from "dayjs";

export default function TaskCard({ task, onEdit, onDelete, onToggle }) {
  return (
    <div className="flex items-center justify-between bg-white p-5 mb-4 rounded-2xl shadow hover:shadow-md transition group">
      <div className="flex items-center gap-4">
        <button onClick={() => onToggle(task)}>
          {task.completed ? (
            <FaCheckCircle className="text-green-500 text-xl" />
          ) : (
            <FaRegCircle className="text-gray-400 text-xl" />
          )}
        </button>
        <div>
          <div
            className={`text-lg font-semibold ${
              task.completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {task.text}
          </div>
          <div className="text-xs text-gray-500 mt-1">
            Due:{" "}
            {task.dueDate
              ? dayjs(task.dueDate).format("MMM D, YYYY")
              : "No due date"}
          </div>
        </div>
      </div>
      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
        <button className="p-1" onClick={() => onEdit(task)}>
          <FaRegEdit className="text-blue-500" />
        </button>
        <button className="p-1" onClick={() => onDelete(task)}>
          <FaTrash className="text-red-500" />
        </button>
      </div>
    </div>
  );
}
