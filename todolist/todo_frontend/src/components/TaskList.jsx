import { useState } from "react";
import {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "../api/todosApi";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";

export default function TaskList({ filter, search }) {
  const { data: todos = [], isLoading, refetch } = useGetTodosQuery();
  const [addTodo, { isLoading: adding }] = useAddTodoMutation();
  const [updateTodo, { isLoading: updating }] = useUpdateTodoMutation();
  const [deleteTodo, { isLoading: deleting }] = useDeleteTodoMutation();
  const [editTask, setEditTask] = useState(null);

  // Filtering & searching
  const filtered = todos.filter((t) => {
    let match =
      filter === "all"
        ? true
        : filter === "completed"
        ? t.completed
        : !t.completed;
    let searchMatch = search
      ? t.text.toLowerCase().includes(search.toLowerCase())
      : true;
    return match && searchMatch;
  });

  // Add new todo
  const handleAdd = async (data) => {
    await addTodo({ ...data, completed: false });
    refetch();
  };

  // Update/edit todo
  const handleUpdate = async (id, data) => {
    await updateTodo({ id, ...data });
    setEditTask(null);
    refetch();
  };

  // Toggle completed status (fixed)
  const handleToggle = (task) => {
    updateTodo({ id: task._id, completed: !task.completed });
  };

  // Delete todo
  const handleDelete = async (id) => {
    await deleteTodo(id);
    refetch();
  };

  return (
    <div className="p-6 flex-1">
      <TaskForm onSubmit={handleAdd} loading={adding} btnLabel="Add Task" />
      <div className="mt-6 space-y-2">
        {isLoading ? (
          <div className="text-center text-gray-400">Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center text-gray-400">No tasks found.</div>
        ) : (
          filtered.map((task) =>
            editTask && editTask._id === task._id ? (
              <TaskForm
                key={task._id}
                initialValue={task}
                onSubmit={(data) => handleUpdate(task._id, data)}
                btnLabel="Update"
                onCancel={() => setEditTask(null)}
                loading={updating}
              />
            ) : (
              <TaskCard
                key={task._id}
                task={task}
                onEdit={() => setEditTask(task)}
                onDelete={() => handleDelete(task._id)}
                onToggle={handleToggle}
              />
            )
          )
        )}
      </div>
    </div>
  );
}
