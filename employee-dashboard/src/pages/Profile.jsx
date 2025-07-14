import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.auth.user);

  const [leaves, setLeaves] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [leaveDate, setLeaveDate] = useState("");
  const [reason, setReason] = useState("");

  useEffect(() => {
    fetch("/data/leaves.json")
      .then((res) => res.json())
      .then(setLeaves);
  }, []);

  const userLeaves = leaves.filter((l) => l.userId === user.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!leaveDate || !reason) return;
    setLeaves([
      ...leaves,
      {
        userId: user.id,
        date: leaveDate,
        reason,
        status: "pending",
        id: Date.now(),
      },
    ]);
    setShowForm(false);
    setLeaveDate("");
    setReason("");
  };

  return (
    <div className="max-w-3xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
      {/* Info Card */}
      <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
        <h1 className="text-2xl font-bold mb-6">My Profile</h1>
        <div className="space-y-2 text-gray-700">
          <div>
            <span className="font-semibold">Name: </span>
            {user.name}
          </div>
          <div>
            <span className="font-semibold">Role: </span>
            {user.role}
          </div>
          <div>
            <span className="font-semibold">Team: </span>
            {user.team}
          </div>
          <div>
            <span className="font-semibold">User ID: </span>
            {user.id}
          </div>
        </div>
      </div>

      {/* Leave Requests Card */}
      <div className="bg-white rounded-xl shadow p-6 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Leave Requests</h2>
          {user.role === "employee" && (
            <button
              onClick={() => setShowForm(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-semibold"
            >
              Request Leave
            </button>
          )}
        </div>

        <div className="overflow-x-auto bg-gray-50 rounded mb-4">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="p-2 text-left text-sm">Date</th>
                <th className="p-2 text-left text-sm">Reason</th>
                <th className="p-2 text-left text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              {userLeaves.length > 0 ? (
                userLeaves.map((leave) => (
                  <tr key={leave.id}>
                    <td className="p-2">{leave.date}</td>
                    <td className="p-2">{leave.reason}</td>
                    <td className="p-2 capitalize">{leave.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="p-2 text-gray-500 text-center">
                    No leave requests yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Leave Request Modal */}
      {showForm && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/30">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-xl p-6 flex flex-col gap-4 w-[90vw] max-w-md"
          >
            <h2 className="text-lg font-bold">Apply for Leave</h2>
            <label className="font-medium">
              Date:
              <input
                type="date"
                className="block border rounded px-3 py-2 mt-1 w-full"
                value={leaveDate}
                onChange={(e) => setLeaveDate(e.target.value)}
                required
              />
            </label>
            <label className="font-medium">
              Reason:
              <textarea
                className="block border rounded px-3 py-2 mt-1 w-full"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
              />
            </label>
            <div className="flex gap-2 justify-end">
              <button
                type="button"
                className="px-4 py-2 rounded bg-gray-200"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded bg-blue-600 text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
