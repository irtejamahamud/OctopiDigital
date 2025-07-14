import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useGetUsersQuery } from "../features/users/usersApi";
import KpiCard from "../components/KpiCard";
import { AttendanceBarChart, RolePieChart } from "../components/ChartWidget";
import { FaUsers, FaCalendarCheck, FaRegPaperPlane } from "react-icons/fa";

// --- DEMO FAKE DATA for attendance (Replace with your real attendance.json API) ---
const demoAttendance = [
  { date: "07-08", present: 38 },
  { date: "07-09", present: 41 },
  { date: "07-10", present: 42 },
  { date: "07-11", present: 40 },
  { date: "07-12", present: 39 },
  { date: "07-13", present: 41 },
  { date: "07-14", present: 37 },
];
// ------------------------------------------

export default function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  const { data: users, isLoading, error } = useGetUsersQuery();

  let totalEmployees = users ? users.length : 0;

  // --- Pie chart: role counts ---
  const roleData = useMemo(() => {
    if (!users) return [];
    const countByRole = {};
    users.forEach((u) => {
      countByRole[u.role] = (countByRole[u.role] || 0) + 1;
    });
    return Object.entries(countByRole).map(([role, count]) => ({
      role,
      count,
    }));
  }, [users]);

  // --- KPI data as before ---
  const kpis = [
    {
      label: "Total Employees",
      value: isLoading ? null : totalEmployees,
      icon: <FaUsers className="text-3xl text-blue-500" />,
      accent: "from-blue-100 to-blue-200",
      text: "text-blue-600",
      loading: isLoading,
      error: error,
    },
    {
      label: "Attendance Today",
      value: "--", // Add logic to get today's value from attendance.json if available
      icon: <FaCalendarCheck className="text-3xl text-green-500" />,
      accent: "from-green-100 to-green-200",
      text: "text-green-600",
    },
    {
      label: "Pending Leaves",
      value: "--", // Replace with real logic if needed
      icon: <FaRegPaperPlane className="text-3xl text-yellow-500" />,
      accent: "from-yellow-100 to-yellow-200",
      text: "text-yellow-600",
    },
  ];

  return (
    <div>
      <div className="mb-7">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-1 tracking-tight">
          Welcome, {user?.name || "User"}!
        </h1>
        <p className="text-gray-500">
          <span className="font-medium text-blue-700">{user?.role}</span>{" "}
          Dashboard Overview
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {kpis.map((kpi, i) => (
          <KpiCard
            key={kpi.label}
            icon={kpi.icon}
            label={kpi.label}
            value={kpi.value}
            loading={kpi.loading}
            error={kpi.error}
            accent={kpi.accent}
            text={kpi.text}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <AttendanceBarChart data={demoAttendance} />
        <RolePieChart data={roleData} />
      </div>
    </div>
  );
}
