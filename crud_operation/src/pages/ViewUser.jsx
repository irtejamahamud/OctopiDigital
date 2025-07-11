// src/pages/ViewUser.jsx

import { useParams } from "react-router-dom";
import { useGetUserQuery } from "../features/users/usersApiSlice";

export default function ViewUser() {
  const { id } = useParams();
  const { data: user, isLoading, isError, error } = useGetUserQuery(id);

  if (isLoading) return <p>Loading…</p>;
  if (isError) return <p>Error: {error.toString()}</p>;
  if (!user) return <p>User not found.</p>;

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="md:flex">
          {/* ─── Left Column ─── */}
          <aside className="md:w-1/3 bg-indigo-50 p-8 flex flex-col items-center text-center space-y-4">
            <img
              src={user.image}
              alt={user.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
            />
            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-indigo-600 font-medium">{user.nationality}</p>
            <p className="text-gray-500">Age: {user.age}</p>

            {/* ─── Skills ─── */}
            <div className="w-full mt-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {user.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* ─── Right Column ─── */}
          <main className="md:w-2/3 p-8 space-y-8">
            {/* Contact Information */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <p className="font-medium">Phone</p>
                  <p>{user.phone}</p>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p>{user.email}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="font-medium">Address</p>
                  <p>{user.address}</p>
                </div>
                <div>
                  <p className="font-medium">Website</p>
                  <p>
                    <a
                      href={user.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                      {user.website}
                    </a>
                  </p>
                </div>
                <div>
                  <p className="font-medium">NID</p>
                  <p>{user.nid}</p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Education
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <p className="font-medium">Degree</p>
                  <p>{user.educationalQualifications.degree}</p>
                </div>
                <div>
                  <p className="font-medium">University</p>
                  <p>{user.educationalQualifications.university}</p>
                </div>
                <div>
                  <p className="font-medium">Session</p>
                  <p>{user.educationalQualifications.session}</p>
                </div>
                <div>
                  <p className="font-medium">CGPA</p>
                  <p>{user.educationalQualifications.cgpa}</p>
                </div>
              </div>
            </section>

            {/* Basic Information */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Basic Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <p className="font-medium">Age</p>
                  <p>{user.age}</p>
                </div>
                <div>
                  <p className="font-medium">Gender</p>
                  <p>{user.gender}</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
