
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black fixed z-50 w-full top-0 border-b border-gray-700">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-4">

        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <h1 className="text-[#DC143C] text-xl sm:text-2xl font-semibold">
            Portfolio
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8 font-medium">
          <Link
            to="/"
            className="text-white hover:text-[#DC143C] transition duration-500"
          >
            Home
          </Link>

          <Link
            to="/Skills"
            className="text-white hover:text-[#DC143C] transition duration-500"
          >
            Skills
          </Link>

          <Link
            to="/About"
            className="text-white hover:text-[#DC143C] transition duration-500"
          >
            About
          </Link>

          <Link
            to="/Project"
            className="text-white hover:text-[#DC143C] transition duration-500"
          >
            Projects
          </Link>

          <Link
            to="/Contact"
            className="text-white hover:text-[#DC143C] transition duration-500"
          >
            Contact
          </Link>
        </ul>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://github.com/Soyab-pinjari/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-[#DC143C] hover:-translate-y-1 transition duration-300"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/soyeb-pinjari-hellp2/?skipRedirect=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-[#DC143C] hover:-translate-y-1 transition duration-300"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          <i className={isOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-700 px-5 pb-5">

          <ul className="flex flex-col items-center gap-5 pt-5 font-medium">

            <Link
              to="/"
              onClick={closeMenu}
              className="text-white hover:text-[#DC143C] transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/Skills"
              onClick={closeMenu}
              className="text-white hover:text-[#DC143C] transition duration-300"
            >
              Skills
            </Link>

            <Link
              to="/About"
              onClick={closeMenu}
              className="text-white hover:text-[#DC143C] transition duration-300"
            >
              About
            </Link>

            <Link
              to="/Project"
              onClick={closeMenu}
              className="text-white hover:text-[#DC143C] transition duration-300"
            >
              Projects
            </Link>

            <Link
              to="/Contact"
              onClick={closeMenu}
              className="text-white hover:text-[#DC143C] transition duration-300"
            >
              Contact
            </Link>

          </ul>

          {/* Mobile Social Icons */}
          <div className="flex justify-center gap-6 mt-6">

            <a
              href="https://github.com/Soyab-pinjari/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-[#DC143C] transition duration-300"
            >
              <i className="bi bi-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/soyeb-pinjari-hellp2/?skipRedirect=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-[#DC143C] transition duration-300"
            >
              <i className="bi bi-linkedin"></i>
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

