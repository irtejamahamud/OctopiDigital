// src/components/EditUserModal.jsx
import React, { useState } from "react";
import { useUpdateUserMutation } from "../features/users/usersApiSlice";

export default function EditUserModal({ user, onClose }) {
  // ─── form state ─────────────────────────────────────────────────────────
  const [form, setForm] = useState({
    name: user.name || "",
    image: user.image || "",
    age: user.age || "",
    nationality: user.nationality || "",
    gender: user.gender || "",
    address: user.address || "",
    email: user.email || "",
    phone: user.phone || "",
    website: user.website || "",
    nid: user.nid || "",
    educationalQualifications: {
      degree: user.educationalQualifications?.degree || "",
      university: user.educationalQualifications?.university || "",
      session: user.educationalQualifications?.session || "",
      cgpa: user.educationalQualifications?.cgpa || "",
    },
    skills: user.skills || [],
  });
  const [preview, setPreview] = useState(user.image || "");
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const skillsList = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.Js",
    "Express.Js",
    "MongoDB",
    "MySQL",
    "Redux",
  ];

  // ─── handlers ────────────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["degree", "university", "session", "cgpa"].includes(name)) {
      setForm((f) => ({
        ...f,
        educationalQualifications: {
          ...f.educationalQualifications,
          [name]: value,
        },
      }));
    } else if (name === "skills") {
      const opts = Array.from(e.target.selectedOptions, (o) => o.value);
      setForm((f) => ({ ...f, skills: opts }));
    } else {
      setForm((f) => ({
        ...f,
        [name]: name === "age" || name === "cgpa" ? Number(value) : value,
      }));
    }
  };

  // image → base64 + preview
  const processFile = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
      setForm((f) => ({ ...f, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };
  const handleImageChange = (e) => processFile(e.target.files?.[0]);
  const handleDrop = (e) => {
    e.preventDefault();
    processFile(e.dataTransfer.files?.[0]);
  };
  const handleRemoveImage = () => {
    setPreview("");
    setForm((f) => ({ ...f, image: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser({ id: user.id, ...form }).unwrap();
      onClose();
    } catch (err) {
      console.error("Update failed:", err);
    }
  };
  const toggleSkill = (skill) => {
    setForm((f) => {
      const has = f.skills.includes(skill);
      return {
        ...f,
        skills: has
          ? f.skills.filter((s) => s !== skill)
          : [...f.skills, skill],
      };
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex">
        {/* ───────── Sidebar ───────── */}
        <aside className="w-1/3 bg-gray-50 p-6 flex flex-col items-center text-center space-y-4">
          <div
            className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200 cursor-pointer"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => document.getElementById("editImage").click()}
          >
            <input
              id="editImage"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16V8m0 0a4 4 0 118 0v8m-8 0h8"
                  />
                </svg>
              </div>
            )}
            {preview && (
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-1 right-1 bg-white rounded-full p-1 shadow hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>

          <h2 className="text-xl font-semibold text-gray-800">{form.name}</h2>
          <p className="text-indigo-600 font-medium">{form.nationality}</p>
        </aside>

        {/* ───────── Form ───────── */}
        <form
          onSubmit={handleSubmit}
          className="w-2/3 p-6 overflow-auto space-y-6"
        >
          <h3 className="text-2xl font-semibold text-gray-800">
            Personal Information
          </h3>

          {/* Gender radio */}
          <div className="flex gap-6">
            {["MALE", "FEMALE", "OTHER"].map((g) => (
              <label key={g} className="inline-flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={form.gender === g}
                  onChange={handleChange}
                  className="w-4 h-4 text-indigo-600 border-gray-300"
                />
                <span className="text-gray-700">
                  {g.charAt(0) + g.slice(1).toLowerCase()}
                </span>
              </label>
            ))}
          </div>

          {/* Grid of inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Age
              </label>
              <input
                name="age"
                type="number"
                value={form.age}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Nationality
              </label>
              <input
                name="nationality"
                value={form.nationality}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Address
              </label>
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Phone
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Website
              </label>
              <input
                name="website"
                value={form.website}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                NID
              </label>
              <input
                name="nid"
                value={form.nid}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Education nested */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Degree
              </label>
              <input
                name="degree"
                value={form.educationalQualifications.degree}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                University
              </label>
              <input
                name="university"
                value={form.educationalQualifications.university}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Session
              </label>
              <input
                name="session"
                value={form.educationalQualifications.session}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                CGPA
              </label>
              <input
                name="cgpa"
                type="number"
                step="0.01"
                value={form.educationalQualifications.cgpa}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* ─── Skills (pill-style) ─── */}
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium text-gray-700">
                Skills
              </label>
              <div className="flex flex-wrap gap-2">
                {skillsList.map((skill) => {
                  const selected = form.skills.includes(skill);
                  return (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => toggleSkill(skill)}
                      className={`
            px-3 py-1 rounded-full text-sm font-medium
            transition
            ${
              selected
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }
          `}
                    >
                      {skill}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ───────── Buttons ───────── */}
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-gray-100"
            >
              Discard Changes
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 disabled:opacity-50"
            >
              {isLoading ? "Saving…" : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
