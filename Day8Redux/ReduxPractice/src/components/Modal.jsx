import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-transparent backdrop-blur-md shadow-md flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-lg"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </>
  );
}
