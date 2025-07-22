import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = "http://localhost:4000";

function Login() {
  const [identifier, setIdentifier] = useState(""); // username or email
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Logging in...");
    const res = await fetch(API + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier, password }),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      setStatus("Login successful! Redirecting...");
      setTimeout(() => {
        navigate("/home");
      }, 500); // half a second is enough
    } else {
      setStatus(data.message || "Login failed");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">
          Login
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Email or Username"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />
          <input
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow hover:bg-blue-700">
            Login
          </button>
        </form>
        <div className="mt-4 text-center text-gray-500 text-sm">
          Don’t have an account?{" "}
          <Link className="text-blue-600 hover:underline" to="/signup">
            Sign Up
          </Link>
        </div>
        <div className="text-blue-700 font-medium mt-4 text-center">
          {status}
        </div>
      </div>
    </div>
  );
}

export default Login;
