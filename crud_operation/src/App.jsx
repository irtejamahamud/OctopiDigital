import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ViewUser from "./pages/ViewUser";
import AddUser from "./pages/AddUser";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-6 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<ViewUser />} />
          <Route path="/add" element={<AddUser />} />
        </Routes>
      </main>
    </div>
  );
}
