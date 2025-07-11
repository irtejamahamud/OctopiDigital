import React from "react";
import { useGetUsersQuery } from "../features/users/usersApiSlice";
import UserTable from "../components/UserTable";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const { data: users = [], isLoading, isError, error } = useGetUsersQuery();
  const [searchParams] = useSearchParams();
  const term = searchParams.get("search")?.toLowerCase() || "";

  if (isLoading) return <p>Loading…</p>;
  if (isError) return <p>Error: {error.toString()}</p>;

  const filtered = users.filter((u) =>
    (u.name ?? "").toLowerCase().includes(term)
  );

  return <UserTable users={filtered} />;
}
