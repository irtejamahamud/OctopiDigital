// src/components/KpiCard.jsx
import React from "react";

export default function KpiCard({
  icon,
  label,
  value,
  loading,
  error,
  accent = "",
  text = "",
}) {
  return (
    <div
      className={`
        bg-gradient-to-br ${accent}
        rounded-2xl shadow-md flex items-center gap-5 p-6
        border border-gray-100
      `}
    >
      <div className="shrink-0 bg-white rounded-full p-3 shadow">{icon}</div>
      <div className="flex-1">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
          {label}
        </div>
        {loading ? (
          <div className="animate-pulse h-7 bg-gray-200 rounded w-16" />
        ) : error ? (
          <div className="text-red-600">Failed to load</div>
        ) : (
          <div className={`text-3xl font-bold ${text}`}>{value}</div>
        )}
      </div>
    </div>
  );
}
