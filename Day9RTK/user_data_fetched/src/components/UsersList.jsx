import React from "react";
import { useGetUsersQuery } from "../features/users/usersApiSlice";

export default function UsersList() {
  const { data: users = [], error, isLoading, isError } = useGetUsersQuery();

  if (isLoading) return <div className="py-8 text-center">Loading users…</div>;
  if (isError)
    return (
      <div className="py-8 text-center text-red-600">
        Error loading users: {error.toString()}
      </div>
    );

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-5"
        >
          <img
            src={user.image}
            alt={user.name}
            className="w-32 h-32 object-cover rounded-full mx-auto"
          />
          <h2 className="mt-4 text-xl font-semibold text-center">
            {user.name}
          </h2>
          <p className="text-gray-500 text-center">
            {user.nationality}, Age {user.age}
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {user.skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
