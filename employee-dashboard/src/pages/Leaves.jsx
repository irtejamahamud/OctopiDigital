import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function LeavesApproval() {
  const user = useSelector((state) => state.auth.user);
  const [leaves, setLeaves] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/data/leaves.json")
      .then((res) => res.json())
      .then(setLeaves);
    fetch("/data/users.json")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  // Only show pending leaves
  const pendingLeaves = leaves.filter((leave) => leave.status === "pending");

  // Simulate approval/rejection in local state
  const handleDecision = (id, status) => {
    setLeaves(leaves.map((l) => (l.id === id ? { ...l, status } : l)));
  };

  // Only show for manager/admin
  if (!["manager", "admin"].includes(user.role)) return null;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Pending Leave Requests</h2>
      {pendingLeaves.length === 0 ? (
        <div className="text-gray-500">No pending requests.</div>
      ) : (
        <div className="overflow-x-auto bg-gray-50 rounded">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="p-2 text-left text-sm">Employee</th>
                <th className="p-2 text-left text-sm">Date</th>
                <th className="p-2 text-left text-sm">Reason</th>
                <th className="p-2 text-left text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingLeaves.map((leave) => (
                <tr key={leave.id}>
                  <td className="p-2">
                    {users.find((u) => u.id === leave.userId)?.name ||
                      "Unknown"}
                  </td>
                  <td className="p-2">{leave.date}</td>
                  <td className="p-2">{leave.reason}</td>
                  <td className="p-2 flex gap-2">
                    <button
                      className="px-3 py-1 rounded bg-green-600 text-white"
                      onClick={() => handleDecision(leave.id, "approved")}
                    >
                      Approve
                    </button>
                    <button
                      className="px-3 py-1 rounded bg-red-600 text-white"
                      onClick={() => handleDecision(leave.id, "rejected")}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
