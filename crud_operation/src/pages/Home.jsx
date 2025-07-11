import { useGetUsersQuery } from "../features/users/usersApiSlice";
import UserTable from "../components/UserTable";

export default function Home() {
  const {
    data: users = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetUsersQuery();

  console.log("⛏️ RTKQ:", { users, isLoading, isFetching, isError, error });

  if (isLoading) return <p>Loading…</p>;
  if (isError) return <p>Error: {error.toString()}</p>;

  return <UserTable users={users} />;
}
