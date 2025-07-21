import { useState } from "react";
import {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "../api/todosApi";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

export default function TodoList() {
  const { data: todos = [], isLoading, refetch } = useGetTodosQuery();
  const [addTodo, { isLoading: adding }] = useAddTodoMutation();
  const [updateTodo, { isLoading: updating }] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState(FILTERS.ALL);

  const filteredTodos =
    filter === FILTERS.ALL
      ? todos
      : todos.filter((todo) =>
          filter === FILTERS.ACTIVE ? !todo.completed : todo.completed
        );

  
  const handleAdd = async (text) => {
    await addTodo({ text, completed: false });
    refetch();
  };

  const handleUpdate = async (id, text) => {
    await updateTodo({ id, text });
    setEditId(null);
    refetch();
  };


  const handleToggle = async (todo) => {
    await updateTodo({ id: todo._id, completed: !todo.completed });
    refetch();
  };

  // Delete
  const handleDelete = async (todo) => {
    await deleteTodo(todo._id);
    refetch();
  };

  // Edit
  const handleEdit = (todo) => setEditId(todo._id);

  return (
    <div className="max-w-xl mx-auto bg-gray-100 rounded-2xl p-8 shadow-lg">
      <TodoForm onSubmit={handleAdd} loading={adding} />
      <div className="flex justify-center gap-3 mt-6 mb-2">
        {Object.entries(FILTERS).map(([key, val]) => (
          <button
            key={key}
            onClick={() => setFilter(val)}
            className={`px-3 py-1 rounded-lg font-medium transition
              ${
                filter === val
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500 border"
              }
            `}
          >
            {val.charAt(0).toUpperCase() + val.slice(1)}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {isLoading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : filteredTodos.length === 0 ? (
          <div className="text-center text-gray-400">No todos found.</div>
        ) : (
          filteredTodos.map((todo) =>
            editId === todo._id ? (
              <TodoItem key={todo._id} todo={todo} editing>
                <TodoForm
                  initialValue={todo.text}
                  onSubmit={(text) => handleUpdate(todo._id, text)}
                  loading={updating}
                />
                <button
                  className="ml-2 text-sm"
                  onClick={() => setEditId(null)}
                >
                  Cancel
                </button>
              </TodoItem>
            ) : (
              <TodoItem
                key={todo._id}
                todo={todo}
                onDelete={handleDelete}
                onToggle={handleToggle}
                onEdit={handleEdit}
              />
            )
          )
        )}
      </div>
    </div>
  );
}
