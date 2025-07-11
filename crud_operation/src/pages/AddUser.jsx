// src/pages/AddUser.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddUserMutation } from "../features/users/usersApiSlice";

export default function AddUser() {
  const navigate = useNavigate();
  const [addUser, { isLoading }] = useAddUserMutation();

  const [form, setForm] = useState({
    name: "",
    image: "", // will hold Base64 string
    age: "",
    nationality: "",
    gender: "",
    address: "",
    email: "",
    phone: "",
    website: "",
    nid: "",
    educationalQualifications: {
      degree: "",
      university: "",
      session: "",
      cgpa: "",
    },
    skills: [],
  });

  // live preview of chosen image
  const [preview, setPreview] = useState("");

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

  // generic handler for text / select
  const onChange = (e) => {
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
      // multi-select dropdown
      const opts = Array.from(e.target.selectedOptions, (o) => o.value);
      setForm((f) => ({ ...f, skills: opts }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  // file → Base64 + preview
  // inside your AddUser component, above the JSX:
  const handleFile = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
      setForm((f) => ({ ...f, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleImageChange = (e) => {
    handleFile(e.target.files?.[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files?.[0]);
  };

  const handleRemoveImage = () => {
    setPreview("");
    setForm((f) => ({ ...f, image: "" }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUser({
        ...form,
        age: Number(form.age),
        educationalQualifications: {
          ...form.educationalQualifications,
          cgpa: Number(form.educationalQualifications.cgpa),
        },
      }).unwrap();
      navigate("/"); // back to list
    } catch (err) {
      console.error("Failed to save: ", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-2">Create Profile</h1>
      <p className="text-gray-600 mb-6">
        Fill in the details below to create a new profile.
      </p>

      <form
        onSubmit={onSubmit}
        className="space-y-6 bg-white p-8 rounded shadow"
      >
        {/* ─────────── Name & Age ─────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Enter full name"
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Age</label>
            <input
              name="age"
              type="number"
              value={form.age}
              onChange={onChange}
              placeholder="Enter age"
              className="w-full border rounded p-2"
              required
            />
          </div>
        </div>

        {/* ─────────── Styled Image Upload ─────────── */}
        <div>
          <label className="block font-medium mb-1">Profile Image</label>
          <div
            className="
      w-full h-48
      flex items-center justify-center
      border-2 border-dashed border-gray-300
      rounded-lg cursor-pointer
      hover:border-gray-400 transition
      relative
    "
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            // clicking anywhere opens the hidden input:
            onClick={() => document.getElementById("imageUpload").click()}
          >
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />

            {!preview ? (
              <div className="text-center">
                {/* upload icon (heroicon) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-gray-400 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16v4h10v-4M7 12l5-5 5 5M12 7v9"
                  />
                </svg>
                <p className="mt-2 text-gray-600">
                  Click or drag & drop to upload
                </p>
              </div>
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
                  className="
            absolute top-2 right-2
            bg-white rounded-full p-1 shadow
            hover:bg-gray-100 transition
          "
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

        {/* ─────────── Nationality & Gender ─────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Nationality</label>
            <input
              name="nationality"
              value={form.nationality}
              onChange={onChange}
              placeholder="Select nationality"
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={onChange}
              className="w-full border rounded p-2"
              required
            >
              <option value="">Select gender</option>
              <option>MALE</option>
              <option>FEMALE</option>
              <option>OTHER</option>
            </select>
          </div>
        </div>

        {/* ─────────── Address ─────────── */}
        <div>
          <label className="block font-medium mb-1">Address</label>
          <input
            name="address"
            value={form.address}
            onChange={onChange}
            placeholder="Enter address"
            className="w-full border rounded p-2"
            required
          />
        </div>

        {/* ─────────── Email & Phone ─────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="Enter email"
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              placeholder="Enter phone"
              className="w-full border rounded p-2"
              required
            />
          </div>
        </div>

        {/* ─────────── Website ─────────── */}
        <div>
          <label className="block font-medium mb-1">Website</label>
          <input
            name="website"
            value={form.website}
            onChange={onChange}
            placeholder="Enter website"
            className="w-full border rounded p-2"
          />
        </div>

        {/* ─────────── Education ─────────── */}
        <h2 className="text-xl font-semibold mt-6">Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Degree</label>
            <input
              name="degree"
              value={form.educationalQualifications.degree}
              onChange={onChange}
              placeholder="Enter degree"
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">University</label>
            <input
              name="university"
              value={form.educationalQualifications.university}
              onChange={onChange}
              placeholder="Enter university"
              className="w-full border rounded p-2"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Session</label>
            <input
              name="session"
              value={form.educationalQualifications.session}
              onChange={onChange}
              placeholder="Enter session"
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">CGPA</label>
            <input
              name="cgpa"
              type="number"
              step="0.01"
              value={form.educationalQualifications.cgpa}
              onChange={onChange}
              placeholder="Enter CGPA"
              className="w-full border rounded p-2"
            />
          </div>
        </div>

        {/* ─────────── Skills ─────────── */}
        <h2 className="text-xl font-semibold mt-6">Skills</h2>
        <div>
          <label className="block font-medium mb-1">Select Skills</label>
          <select
            name="skills"
            multiple
            value={form.skills}
            onChange={onChange}
            className="w-full border rounded p-2"
          >
            {skillsList.map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end space-x-3 mt-6">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {isLoading ? "Saving…" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}
