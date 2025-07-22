import {
  FaTasks,
  FaRegCalendarAlt,
  FaCheck,
  FaClock,
  FaTag,
  FaChartPie,
  FaCog,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

const sections = [
  {
    heading: "Tasks",
    items: [
      { label: "All Tasks", value: "all", icon: <FaTasks /> },
      { label: "Pending", value: "active", icon: <FaClock /> },
      { label: "Completed", value: "completed", icon: <FaCheck /> },
    ],
  },
  {
    heading: "Productivity",
    items: [
      { label: "Calendar", value: "calendar", icon: <FaRegCalendarAlt /> },
      { label: "Labels", value: "labels", icon: <FaTag /> },
      { label: "Analytics", value: "analytics", icon: <FaChartPie /> },
    ],
  },
  {
    heading: "Account",
    items: [
      { label: "Profile", value: "profile", icon: <FaUserCircle /> },
      { label: "Settings", value: "settings", icon: <FaCog /> },
      { label: "Logout", value: "logout", icon: <FaSignOutAlt /> },
    ],
  },
];

export default function Sidebar({ filter, setFilter }) {
  return (
    <aside className="fixed top-0 left-0 h-screen w-60 bg-gradient-to-b from-blue-50 via-white to-purple-50 shadow-xl flex flex-col z-30 transition">
      {/* Logo/Brand */}
      <div className="flex items-center gap-3 px-6 pt-8 pb-6 mb-2 border-b">
        <div className="bg-gradient-to-tr from-blue-400 to-purple-400 w-10 h-10 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">
          <FaTasks />
        </div>
        <span className="text-base font-extrabold text-blue-600 tracking-wide">
          Taskify
        </span>
      </div>

      {/* Sections */}
      <div className="flex-1 px-2 py-4 overflow-auto">
        {sections.map((section) => (
          <div key={section.heading} className="mb-5">
            <div className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
              {section.heading}
            </div>
            {section.items.map((item) => (
              <button
                key={item.value}
                onClick={() => setFilter(item.value)}
                className={`
                  flex items-center gap-3 px-4 py-2 mb-1 w-full rounded-lg transition
                  ${
                    filter === item.value
                      ? "bg-gradient-to-r from-blue-500 to-purple-400 text-white shadow"
                      : "text-gray-600 hover:bg-blue-100"
                  }
                  text-base font-medium
                `}
                style={{ outline: "none" }}
              >
                <span
                  className={`transition text-lg ${
                    filter === item.value ? "scale-110" : ""
                  }`}
                >
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Version/brand, can put at bottom */}
      <div className="px-6 pb-5 text-xs text-gray-300 text-center mt-auto">
        &copy; {new Date().getFullYear()} Taskify &mdash; v1.0
      </div>
    </aside>
  );
}
