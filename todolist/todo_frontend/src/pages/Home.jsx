import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-200 via-purple-200 to-pink-100 flex flex-col items-center">
      <header className="w-full max-w-xl text-center py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-3 drop-shadow">
          Modern TODO App
        </h1>
        <p className="text-gray-500">Track your tasks easily.</p>
      </header>
      <main className="w-full flex-1 flex justify-center">
        <TodoList />
      </main>
      <footer className="text-center py-4 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Irteja_Todolist. All rights reserved.
      </footer>
    </div>
  );
}
