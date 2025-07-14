import React, { useEffect, useState } from "react";

// Utility to make colored chips for members
function stringToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++)
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  const h = Math.abs(hash) % 360;
  return `hsl(${h},70%,90%)`;
}
function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

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
      <h1 className="text-3xl font-extrabold mb-8 tracking-tight">Teams</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {teams.map((team) => (
          <div
            key={team.id}
            className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-7 rounded-2xl shadow-md flex flex-col gap-3 transition hover:-translate-y-1 hover:shadow-lg border border-blue-100"
          >
            {/* Team Avatar */}
            <div className="absolute -top-6 left-7">
              <div className="w-14 h-14 flex items-center justify-center rounded-full shadow-lg text-2xl font-extrabold text-blue-700 border-4 border-b-blue-300 bg-white">
                {/* Emoji fallback: 👥 */}
                {team.emoji || getInitials(team.name)}
              </div>
            </div>
            <div className="pl-20 min-h-[2.5rem]">
              <h2 className="text-xl font-bold text-blue-900">{team.name}</h2>
              <div className="text-gray-500 text-sm mb-2">
                {team.description}
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="font-semibold text-gray-700 mr-1">
                  Members:
                </span>
                {team.members
                  .map((id) => users.find((u) => u.id === id)?.name)
                  .filter(Boolean)
                  .map((name, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium shadow"
                      style={{
                        background: stringToColor(name),
                        color: "#114",
                        border: "1.5px solid #fff",
                      }}
                    >
                      {name}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
