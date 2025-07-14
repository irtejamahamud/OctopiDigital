import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/users.json")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogin = () => {
    const userObj = users.find((u) => u.id === Number(selected));
    if (userObj) dispatch(login(userObj));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <div className="w-full max-w-md bg-white/90 rounded-2xl shadow-xl p-8 backdrop-blur-md">
        <div className="flex flex-col items-center mb-8">
          {/* Logo/Avatar */}
          <div className="bg-blue-500 rounded-full p-4 shadow-lg mb-2">
            <svg width={36} height={36} fill="none" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-4 0-7 2.239-7 5v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1c0-2.761-3-5-7-5z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            Welcome Back
          </h2>
          <p className="text-gray-500">Sign in to OfficeDash</p>
        </div>
        <div>
          <label
            className="block mb-2 text-gray-700 font-medium"
            htmlFor="userSelect"
          >
            Select your account
          </label>
          <select
            id="userSelect"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="">Select user</option>
            {users.map((u) => (
              <option value={u.id} key={u.id}>
                {u.name} ({u.role})
              </option>
            ))}
          </select>
          <button
            onClick={handleLogin}
            className={`w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2.5 rounded-lg font-semibold shadow-md disabled:opacity-50`}
            disabled={!selected}
          >
            Login
          </button>
        </div>
        <div className="mt-8 text-center text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} OfficeDash. All rights reserved.
        </div>
      </div>
    </div>
  );
}
