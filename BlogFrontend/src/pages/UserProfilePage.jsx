import React from "react";

export default function UserProfilePage({ user }) {
  // Example fallback user if not passed as prop
  const profile = user || {
    username: "demo_user",
    email: "demo@example.com",
    joined: "2024-01-01",
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white rounded-xl shadow p-8">
      <div className="text-2xl font-bold mb-2 text-blue-700">
        {profile.username}
      </div>
      <div className="text-gray-700 mb-1">Email: {profile.email}</div>
      <div className="text-gray-500 text-sm">Joined: {profile.joined}</div>
    </div>
  );
}
