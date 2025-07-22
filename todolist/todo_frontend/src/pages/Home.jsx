import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TaskList from "../components/TaskList";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar filter={filter} setFilter={setFilter} />
      <div className="flex-1 flex flex-col ml-56">
        <Header search={search} setSearch={setSearch} />
        <main className="flex-1 flex flex-col px-4 pt-4 pb-8">
          <TaskList filter={filter} search={search} />
        </main>
      </div>
    </div>
  );
}
