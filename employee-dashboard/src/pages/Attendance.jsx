import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaRegCalendarCheck, FaCheckCircle } from "react-icons/fa";

// Utility: color and initials for user avatars
function stringToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++)
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  const h = Math.abs(hash) % 360;
  return `hsl(${h},60%,88%)`;
}
function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function Attendance() {
  const user = useSelector((state) => state.auth.user);
  const [attendance, setAttendance] = useState([]);
  const [users, setUsers] = useState([]);
  const [markedToday, setMarkedToday] = useState(false);

  // Today’s date (YYYY-MM-DD)
  const today = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    fetch("/data/attendance.json")
      .then((res) => res.json())
      .then((data) => {
        setAttendance(data);
        if (
          data.find(
            (rec) =>
              rec.userId === user.id &&
              rec.date === today &&
              rec.status === "present"
          )
        ) {
          setMarkedToday(true);
        }
      });

    fetch("/data/users.json")
      .then((res) => res.json())
      .then(setUsers);
  }, [user.id, today]);

  // Filter: only current user if employee, else show all
  const records =
    user.role === "employee"
      ? attendance.filter((a) => a.userId === user.id)
      : attendance;

  // Count present today (for summary bar)
  const presentToday = attendance.filter(
    (a) => a.date === today && a.status === "present"
  ).length;

  // Simulate marking present
  const handleMarkPresent = () => {
    setAttendance([
      ...attendance,
      { userId: user.id, date: today, status: "present" },
    ]);
    setMarkedToday(true);
  };

  return (
    <div>
      <div className="mb-6 flex items-center gap-6">
        <FaRegCalendarCheck className="text-blue-500 text-3xl" />
        <div>
          <div className="text-lg font-semibold">
            Attendance for <span className="text-blue-600">{today}</span>
          </div>
          <div className="text-gray-500 text-sm">
            Present today:{" "}
            <span className="text-blue-700 font-bold">{presentToday}</span>
          </div>
        </div>
      </div>

      {user.role === "employee" && (
        <div className="mb-6">
          {markedToday ? (
            <button
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-green-100 text-green-700 font-semibold cursor-not-allowed shadow-sm"
              disabled
            >
              <FaCheckCircle className="text-green-500" />
              Present Marked for Today
            </button>
          ) : (
            <button
              onClick={handleMarkPresent}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition"
            >
              <FaCheckCircle />
              Mark Present for Today
            </button>
          )}
        </div>
      )}

      <div className="overflow-x-auto rounded-2xl shadow-lg bg-white mt-4">
        <table className="min-w-full py-1 px-3 border-separate border-spacing-y-2">
          <thead className="bg-blue-50 rounded">
            <tr>
              <th className="p-4 text-left font-bold text-gray-600 rounded-l-xl">
                User
              </th>
              <th className="p-4 text-left font-bold text-gray-600">Date</th>
              <th className="p-4 text-left font-bold text-gray-600 rounded-r-xl">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {records.map((rec, i) => {
              const u = users.find((u) => u.id === rec.userId);
              return (
                <tr
                  key={i}
                  className="group bg-gray-50 hover:bg-blue-50 transition rounded-xl"
                  style={{
                    boxShadow: "0 1px 2px rgba(20, 80, 200, 0.03)",
                  }}
                >
                  <td className="p-4 flex items-center gap-3 rounded-l-xl">
                    {u && (
                      <span
                        className="w-10 h-10 flex items-center justify-center rounded-full text-base font-bold shadow"
                        style={{
                          background: stringToColor(u.name),
                          color: "#225",
                          border: "1.5px solid #fff",
                        }}
                      >
                        {getInitials(u.name)}
                      </span>
                    )}
                    <span>{u?.name || "-"}</span>
                  </td>
                  <td className="p-4">{rec.date}</td>
                  <td className="p-4 rounded-r-xl">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        rec.status === "present"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {rec.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
