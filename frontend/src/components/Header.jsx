import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import { FaUserCircle, FaTasks, FaHome, FaBriefcase, FaBuilding } from "react-icons/fa";
import soulsborneImg from "../assets/soulsborne(1).png";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false); // State to manage mobile menu toggle
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  // Toggle menu function
  const toggleMenu = () => setMenuOpened(!menuOpened);

  // Handle logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
    // Add logout logic (e.g., clearing session storage, token removal)
  };

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-white shadow-lg font-semibold text-gray-800">
      <div className="flex justify-between items-center py-4 px-6 lg:px-12">
        {/* Logo */}
        <div className="flex-shrink-0 ml-4">
          <Link to="/">
            <img
              src={soulsborneImg}
              alt="Soulsborne Logo"
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Navbar for Desktop */}
        <nav className="hidden md:flex gap-x-8 xl:gap-x-12 text-lg items-center">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-indigo-600 transition duration-300"
          >
            <FaHome className="text-indigo-600" /> Home
          </Link>
          <Link
            to="/freelance"
            className="flex items-center gap-2 hover:text-indigo-600 transition duration-300"
          >
            <FaBriefcase className="text-indigo-600" /> Freelancing
          </Link>
          <Link
            to="/tasks"
            className="flex items-center gap-2 hover:text-indigo-600 transition duration-300"
          >
            <FaTasks className="text-indigo-600" /> Tasks
          </Link>
          <Link
            to="/company"
            className="flex items-center gap-2 hover:text-indigo-600 transition duration-300"
          >
            <FaBuilding className="text-indigo-600" /> Companies
          </Link>
          <Link
            to="/startup"
            className="flex items-center gap-2 hover:text-indigo-600 transition duration-300"
          >
            <FaBuilding className="text-indigo-600" /> Startup
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          {!menuOpened ? (
            <MdMenu
              className="cursor-pointer text-3xl text-gray-700 hover:text-indigo-600 transition duration-300"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="cursor-pointer text-3xl text-gray-700 hover:text-indigo-600 transition duration-300"
              onClick={toggleMenu}
            />
          )}
        </div>

        {/* User Section for Desktop */}
        <div className="hidden md:flex items-center gap-x-6">
          {isLoggedIn ? (
            <Link to="/profile">
              <FaUserCircle className="text-3xl cursor-pointer text-gray-700 hover:text-indigo-600 transition duration-300" />
            </Link>
          ) : (
            <>
              <Link
                to="/signup"
                className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition duration-300"
              >
                Sign Up
              </Link>
              <Link to="/login">
                <button className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-300">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`${
          menuOpened
            ? "flex flex-col gap-y-6 fixed top-16 right-0 p-6 bg-white shadow-lg w-64 z-10 transition duration-300"
            : "hidden"
        }`}
      >
        <nav className="flex flex-col gap-y-6">
          <Link
            to="/freelance"
            className="flex items-center gap-2 hover:text-indigo-600 transition duration-300"
          >
            <FaBriefcase className="text-indigo-600" /> Freelancing
          </Link>
          <Link
            to="/tasks"
            className="flex items-center gap-2 hover:text-indigo-600 transition duration-300"
          >
            <FaTasks className="text-indigo-600" /> Tasks
          </Link>
          <Link
            to="/company"
            className="flex items-center gap-2 hover:text-indigo-600 transition duration-300"
          >
            <FaBuilding className="text-indigo-600" /> Companies
          </Link>
        </nav>

        {/* Mobile User Section */}
        <div className="flex flex-col gap-y-4 mt-6">
          {isLoggedIn ? (
            <Link
              to="/profile"
              className="flex items-center gap-2 text-center p-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              <FaUserCircle className="text-xl" /> Profile
            </Link>
          ) : (
            <>
              <Link
                to="/signup"
                className="text-center p-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="text-center p-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
