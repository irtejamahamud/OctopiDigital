import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome back, Admin!</p>
      </header>

      {/* Summary Cards */}
      <section className="grid gap-6 md:grid-cols-3 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-700 mb-2">Users</h2>
          <p className="text-3xl font-bold text-amber-500">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-700 mb-2">
            Jobs Posted
          </h2>
          <p className="text-3xl font-bold text-amber-500">89</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-700 mb-2">
            Applications
          </h2>
          <p className="text-3xl font-bold text-amber-500">4,567</p>
        </div>
      </section>

      {/* Data Table */}
      <section className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Job Title</th>
              <th className="px-4 py-2">Company</th>
              <th className="px-4 py-2">Applicants</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr className="border-t">
              <td className="px-4 py-3">Frontend Developer</td>
              <td className="px-4 py-3">Acme Corp</td>
              <td className="px-4 py-3">123</td>
              <td className="px-4 py-3">
                <span className="inline-block bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">
                  Active
                </span>
              </td>
            </tr>
            {/* Add more rows here */}
          </tbody>
        </table>
      </section>
    </div>
  );
}
