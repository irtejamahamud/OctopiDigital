// src/pages/ViewUser.jsx

import React from "react";
import { useParams } from "react-router-dom";
import { useGetUserQuery } from "../features/users/usersApiSlice";
import { FiPhone, FiMail, FiGlobe } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import {
  FaIdCard,
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaRegStar,
  FaBirthdayCake,
  FaVenusMars,
} from "react-icons/fa";

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
                  <p className="flex items-center font-medium">
                    <FiPhone className="mr-2 text-indigo-500" />
                    Phone
                  </p>
                  <p>{user.phone}</p>
                </div>
                <div>
                  <p className="flex items-center font-medium">
                    <FiMail className="mr-2 text-indigo-500" />
                    Email
                  </p>
                  <p>{user.email}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="flex items-center font-medium">
                    <MdLocationOn className="mr-2 text-indigo-500" />
                    Address
                  </p>
                  <p>{user.address}</p>
                </div>
                <div>
                  <p className="flex items-center font-medium">
                    <FiGlobe className="mr-2 text-indigo-500" />
                    Website
                  </p>
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
                  <p className="flex items-center font-medium">
                    <FaIdCard className="mr-2 text-indigo-500" />
                    NID
                  </p>
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
                  <p className="flex items-center font-medium">
                    <FaGraduationCap className="mr-2 text-indigo-500" />
                    Degree
                  </p>
                  <p>{user.educationalQualifications.degree}</p>
                </div>
                <div>
                  <p className="flex items-center font-medium">
                    <FaUniversity className="mr-2 text-indigo-500" />
                    University
                  </p>
                  <p>{user.educationalQualifications.university}</p>
                </div>
                <div>
                  <p className="flex items-center font-medium">
                    <FaCalendarAlt className="mr-2 text-indigo-500" />
                    Session
                  </p>
                  <p>{user.educationalQualifications.session}</p>
                </div>
                <div>
                  <p className="flex items-center font-medium">
                    <FaRegStar className="mr-2 text-indigo-500" />
                    CGPA
                  </p>
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
                  <p className="flex items-center font-medium">
                    <FaBirthdayCake className="mr-2 text-indigo-500" />
                    Age
                  </p>
                  <p>{user.age}</p>
                </div>
                <div>
                  <p className="flex items-center font-medium">
                    <FaVenusMars className="mr-2 text-indigo-500" />
                    Gender
                  </p>
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
