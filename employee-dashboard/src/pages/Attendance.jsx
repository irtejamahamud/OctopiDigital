import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Attendance() {
  const user = useSelector((state) => state.auth.user);
  const [attendance, setAttendance] = useState([]);
  const [users, setUsers] = useState([]);
  const [markedToday, setMarkedToday] = useState(false);

  // Get today’s date (YYYY-MM-DD)
  const today = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    fetch("/data/attendance.json")
      .then((res) => res.json())
      .then((data) => {
        setAttendance(data);
        // Check if already marked today
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

  // Show only current user's attendance for employee role
  const records =
    user.role === "employee"
      ? attendance.filter((a) => a.userId === user.id)
      : attendance;

  // Simulate "write" by updating local state
  const handleMarkPresent = () => {
    setAttendance([
      ...attendance,
      { userId: user.id, date: today, status: "present" },
    ]);
    setMarkedToday(true);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Attendance Records</h1>
      {user.role === "employee" && (
        <div className="mb-6">
          {markedToday ? (
            <button
              className="px-4 py-2 rounded bg-green-400 text-white cursor-not-allowed"
              disabled
            >
              Present Marked for Today
            </button>
          ) : (
            <button
              onClick={handleMarkPresent}
              className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              Mark Present for Today
            </button>
          )}
        </div>
      )}
      <div className="overflow-x-auto rounded shadow bg-white">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left font-semibold">User</th>
              <th className="p-3 text-left font-semibold">Date</th>
              <th className="p-3 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {records.map((rec, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="p-3">
                  {users.find((u) => u.id === rec.userId)?.name || "-"}
                </td>
                <td className="p-3">{rec.date}</td>
                <td className="p-3 capitalize">{rec.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
