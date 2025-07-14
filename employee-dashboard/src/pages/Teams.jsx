import React, { useEffect, useState } from "react";

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/data/teams.json")
      .then((res) => res.json())
      .then(setTeams);
    fetch("/data/users.json")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Teams</h1>
      <div className="grid gap-6">
        {teams.map((team) => (
          <div key={team.id} className="bg-white rounded shadow p-4">
            <h2 className="text-lg font-semibold">{team.name}</h2>
            <div className="text-gray-700 text-sm mb-2">{team.description}</div>
            <div>
              <span className="font-semibold">Members: </span>
              {team.members
                .map((id) => users.find((u) => u.id === id)?.name)
                .filter(Boolean)
                .join(", ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
