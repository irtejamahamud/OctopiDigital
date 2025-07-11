import React from "react";
import UsersList from "./components/UsersList";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold text-gray-800">User Directory</h1>
      </header>
      <main>
        <UsersList />
      </main>
    </div>
  );
}
