import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:4000";

function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(API + "/profile", {
      headers: { Authorization: "Bearer " + token },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) setUser(data.user);
        else {
          localStorage.removeItem("token");
          navigate("/login");
        }
      });
  }, [navigate]);

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Home</h2>
        {user ? (
          <div>
            <p className="mb-2 text-lg">
              Welcome, <span className="font-semibold">{user.fullName}</span>!
            </p>
            <p className="mb-4 text-gray-600">Email: {user.email}</p>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold shadow"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <p>Loading user info...</p>
        )}
      </div>
    </div>
  );
}

export default Home;
