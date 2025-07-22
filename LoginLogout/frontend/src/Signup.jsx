import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = "http://localhost:4000";

function Signup() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
  });
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Signing up...");
    const res = await fetch(API + "/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.status === 201) {
      setStatus("Signup successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 1200);
    } else {
      setStatus(data.message || "Signup failed");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">
          Sign Up
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
          />
          <input
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />
          <input
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow hover:bg-blue-700">
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center text-gray-500 text-sm">
          Already have an account?{" "}
          <Link className="text-blue-600 hover:underline" to="/login">
            Login
          </Link>
        </div>
        <div className="text-blue-700 font-medium mt-4 text-center">
          {status}
        </div>
      </div>
    </div>
  );
}

export default Signup;
