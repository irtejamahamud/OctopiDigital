import React from "react";
import { Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import Posts from "./components/Posts";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}
