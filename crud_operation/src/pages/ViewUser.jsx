import { useParams } from "react-router-dom";
import { useGetUserQuery } from "../features/users/usersApiSlice";

export default function ViewUser() {
  const { id } = useParams();
  const { data: user, isLoading, isError, error } = useGetUserQuery(id);

  if (isLoading) return <p>Loading…</p>;
  if (isError) return <p>Error: {error.toString()}</p>;
  if (!user) return <p>User not found.</p>;

  return (
    <div className="bg-white p-6 rounded shadow">
      <img src={user.image} alt="" className="w-24 h-24 rounded-full mb-4" />
      <h2 className="text-2xl font-bold">{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Nationality: {user.nationality}</p>
      {/* …other fields… */}
    </div>
  );
}
