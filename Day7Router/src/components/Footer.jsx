import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Logo / Branding */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">NextWorkX</h2>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            {/* Twitter */}
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M23.954 4.569a10 10 0 01-2.825.775 4.933 4.933 0 002.163-2.724 9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482 13.978 13.978 0 01-10.15-5.15 4.822 4.822 0 00-.664 2.475 4.92 4.92 0 002.188 4.1 4.903 4.903 0 01-2.229-.616v.06a4.924 4.924 0 003.946 4.827 4.996 4.996 0 01-2.224.085 4.928 4.928 0 004.604 3.417 9.868 9.868 0 01-6.102 2.104c-.396 0-.79-.023-1.17-.069a13.945 13.945 0 007.548 2.212c9.058 0 14.009-7.496 14.009-13.986 0-.21 0-.423-.015-.633A9.936 9.936 0 0024 4.59z" />
            </svg>
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            {/* GitHub */}
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.263.793-.583v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.809 1.305 3.495.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.333-5.467-5.931 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.523.116-3.176 0 0 1.008-.322 3.301 1.23a11.49 11.49 0 013.003-.404c1.02.005 2.045.137 3.004.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.232 1.911 1.232 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.192.699.8.581C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            {/* LinkedIn */}
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.762 2.24 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.76-2.238-5-5-5zm-11.75 20h-2.5v-9h2.5v9zm-1.25-10.2c-.828 0-1.5-.674-1.5-1.5s.672-1.5 1.5-1.5 1.5.674 1.5 1.5-.672 1.5-1.5 1.5zm13 10.2h-2.5v-4.8c0-1.143-.02-2.615-1.593-2.615-1.595 0-1.838 1.246-1.838 2.534v4.881h-2.5v-9h2.4v1.233h.034c.334-.634 1.149-1.301 2.366-1.301 2.529 0 2.995 1.665 2.995 3.831v5.237z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} NextWorkX. All rights reserved.
      </div>
    </footer>
  );
}
