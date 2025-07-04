import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent text-white">
      <nav className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-orange-600 tracking-wide">
          Irteja Mahmud
        </div>

        <ul className="flex gap-8 text-sm md:text-base font-semibold">
          <li>
            <a href="#home" className="hover:text-orange-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-orange-400">
              About
            </a>
          </li>
          <li>
            <a href="#service" className="hover:text-orange-400">
              Service
            </a>
          </li>
          <li>
            <a href="#resume" className="hover:text-orange-400">
              Resume
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-orange-400">
              Portfolio
            </a>
          </li>
          <span className="text-white">.</span>
          <li>
            <a href="#blog" className="hover:text-orange-400">
              Blog
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-orange-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
