import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  MdDashboard,
  MdPeople,
  MdGroup,
  MdAccessTime,
  MdAssessment,
  MdPerson,
  MdSettings,
  MdOutlineEventBusy,
} from "react-icons/md";

const NAV_LINKS = [
  {
    to: "/",
    label: "Dashboard",
    roles: ["admin", "manager", "employee"],
    icon: MdDashboard,
  },
  {
    to: "/users",
    label: "Users",
    roles: ["admin"],
    icon: MdPeople,
  },
  {
    to: "/teams",
    label: "Teams",
    roles: ["admin", "manager"],
    icon: MdGroup,
  },
  {
    to: "/attendance",
    label: "Attendance",
    roles: ["admin", "manager", "employee"],
    icon: MdAccessTime,
  },
  {
    to: "/reports",
    label: "Reports",
    roles: ["admin", "manager"],
    icon: MdAssessment,
  },
  {
    to: "/profile",
    label: "Profile",
    roles: ["admin", "manager", "employee"],
    icon: MdPerson,
  },
  {
    to: "/settings",
    label: "Settings",
    roles: ["admin"],
    icon: MdSettings,
  },
  {
    to: "/leaves",
    label: "Leaves",
    roles: ["admin", "manager"],
    icon: MdOutlineEventBusy,
  },
];

export default function Sidebar() {
  const user = useSelector((state) => state.auth.user);

  if (!user) return null;

  return (
    <aside className="bg-white shadow-lg h-screen w-64 flex-shrink-0 flex flex-col rounded-r-3xl overflow-hidden">
      <div className="flex items-center gap-3 p-7 pb-4 border-b border-gray-200 bg-gradient-to-r from-blue-400 to-blue-600">
        {/* OfficeDash Logo */}
        <div className="bg-white rounded-full p-2 shadow-md">
          <MdDashboard className="text-blue-500 text-2xl" />
        </div>
        <div className="font-bold font-mono text-2xl text-white tracking-wide select-none">
          OfficeDash
        </div>
      </div>
      <nav className="flex flex-col gap-1 mt-6 px-3">
        {NAV_LINKS.filter((link) => link.roles.includes(user.role)).map(
          (link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-5 py-2.5 rounded-lg my-1 font-medium text-base transition-colors duration-200 ${
                    isActive
                      ? "bg-blue-100 text-blue-700 shadow"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
                end={link.to === "/"}
              >
                <Icon className="text-xl" />
                <span>{link.label}</span>
              </NavLink>
            );
          }
        )}
      </nav>
      <div className="flex-1" />
      <div className="p-5 text-xs text-gray-400 text-center border-t border-gray-100">
        &copy; {new Date().getFullYear()} OfficeDash
      </div>
    </aside>
  );
}
