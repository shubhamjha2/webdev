import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <Link to="/">Logo</Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <NavLink to="/" className={({isActive})=>`${isActive ? "text-orange-500":"text-white "}`}>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" className={({isActive})=>`${isActive ? "text-orange-500":"text-white "}`}>
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink to="/gitprofile" className={({isActive})=>`${isActive ? "text-orange-500":"text-white "}`}>
                  GITHUB
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" className={({isActive})=>`${isActive ? "text-orange-500":"text-white "}`}>
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {showMenu ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {showMenu && (
          <div className="mobile-menu md:hidden">
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
