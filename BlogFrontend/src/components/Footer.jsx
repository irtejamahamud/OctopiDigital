import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 px-4 text-center mt-auto">
      &copy; {new Date().getFullYear()} Blog Platform &mdash; All rights
      reserved.
    </footer>
  );
}
