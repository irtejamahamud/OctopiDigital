import React, { useState } from "react";
import { useUpdateUserMutation } from "../features/users/usersApiSlice";

export default function EditUserModal({ user, onClose }) {
  // Initialize form with all user fields
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

  // Handle generic text/select changes
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

  // Image handling (drag/drop or file select)
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

  return (
    <div className="fixed inset-0 bg-transparent/50 bg-opacity-50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-auto space-y-4"
      >
        <h2 className="text-2xl font-semibold mb-4">Edit User</h2>

        {/* ─── Image Upload ─── */}
        <div>
          <label className="block font-medium mb-1">Profile Image</label>
          <div
            className="w-full h-32 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer relative"
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
            {!preview ? (
              <span className="text-gray-500">Click or drop image here</span>
            ) : (
              <>
                <img
                  src={preview}
                  alt="Preview"
                  className="object-cover w-full h-full rounded-lg"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>

        {/* ─── Basic Info ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Age</label>
            <input
              name="age"
              type="number"
              value={form.age}
              onChange={handleChange}
              className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* ─── Contact & Nationality ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Nationality</label>
            <input
              name="nationality"
              value={form.nationality}
              onChange={handleChange}
              className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select gender</option>
              <option>MALE</option>
              <option>FEMALE</option>
              <option>OTHER</option>
            </select>
          </div>
        </div>

        {/* ─── Address ─── */}
        <div>
          <label className="block mb-1 font-medium">Address</label>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* ─── Contact Info ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* ─── Website & NID ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Website</label>
            <input
              name="website"
              value={form.website}
              onChange={handleChange}
              className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">NID</label>
            <input
              name="nid"
              value={form.nid}
              onChange={handleChange}
              className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* ─── Education ─── */}
        <h3 className="text-lg font-semibold mt-4">Education</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Degree</label>
            <input
              name="degree"
              value={form.educationalQualifications.degree}
              onChange={handleChange}
              className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">University</label>
            <input
              name="university"
              value={form.educationalQualifications.university}
              onChange={handleChange}
              className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Session</label>
            <input
              name="session"
              value={form.educationalQualifications.session}
              onChange={handleChange}
              className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">CGPA</label>
            <input
              name="cgpa"
              type="number"
              step="0.01"
              value={form.educationalQualifications.cgpa}
              onChange={handleChange}
              className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* ─── Skills ─── */}
        <div>
          <label className="block mb-1 font-medium">Skills</label>
          <select
            name="skills"
            multiple
            value={form.skills}
            onChange={handleChange}
            className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500"
          >
            {skillsList.map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </div>

        {/* ─── Buttons ─── */}
        <div className="flex justify-end space-x-2 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-400"
          >
            {isLoading ? "Saving…" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}
