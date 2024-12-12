import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import {
  FaUserCircle,
  FaTasks,
  FaHome,
  FaBriefcase,
  FaBuilding,
  FaSignOutAlt,
  FaUserEdit,
  FaUser,
} from "react-icons/fa";
import soulsborneImg from "../assets/soulsborne-logo.svg";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false); // State to manage mobile menu toggle
  const [isLoggedIn, setIsLoggedIn] = useState(true); // State to manage login status
  const [profileMenuOpened, setProfileMenuOpened] = useState(false); // Profile dropdown state
  const [showHeader, setShowHeader] = useState(true); // State to manage header visibility
  let lastScroll = 0;

  // Scroll listener to hide/show header
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScroll && currentScroll > 100) {
        setShowHeader(false); // Hide header on scroll down
      } else {
        setShowHeader(true); // Show header on scroll up
      }
      lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu function
  const toggleMenu = () => setMenuOpened(!menuOpened);

  // Handle logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
    // Add logout logic (e.g., clearing session storage, token removal)
  };

  // Toggle profile menu function
  const toggleProfileMenu = () => setProfileMenuOpened(!profileMenuOpened);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 bg-white shadow-lg font-semibold text-gray-800 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
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
        <nav className="hidden md:flex font-bold gap-x-8 xl:gap-x-12 text-lg items-center">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-blue-800 transition duration-300"
          >
            <FaHome className="text-blue-800" /> Home
          </Link>
    
          <Link
            to="/tasks"
            className="flex items-center gap-2 hover:text-blue-800 transition duration-300"
          >
            <FaTasks className="text-blue-800" /> Tasks
          </Link>
          <Link
            to="/company"
            className="flex items-center gap-2 hover:text-blue-800 transition duration-300"
          >
            <FaBuilding className="text-blue-800" /> Investors
          </Link>
          <Link
            to="/startup"
            className="flex items-center gap-2 hover:text-blue-800 transition duration-300"
          >
            <FaBuilding className="text-blue-800" /> Startup
          </Link>
        </nav>

        {/* User Section for Desktop */}
        <div className="hidden md:flex items-center gap-x-6 relative">
          {isLoggedIn ? (
            <div className="relative">
              <FaUserCircle
                className="text-3xl cursor-pointer text-gray-700 hover:text-blue-800 transition duration-300"
                onClick={toggleProfileMenu}
              />
              {profileMenuOpened && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md p-4 w-40">
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 transition duration-300 rounded-md"
                  >
                    <FaUserEdit /> Profile
                  </Link>
                  <Link
                    to="/about"
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 transition duration-300 rounded-md"
                  >
                    <FaUser /> About Us
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 p-2 text-red-600 hover:bg-gray-100 transition duration-300 rounded-md w-full"
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/signup"
                className="px-4 py-2 text-blue-800 border border-blue-800 rounded-md hover:bg-blue-800 hover:text-white transition duration-300"
              >
                Sign Up
              </Link>
              <Link to="/login">
                <button className="px-4 py-2 text-white bg-blue-800 rounded-md hover:bg-blue-800 transition duration-300">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          {!menuOpened ? (
            <MdMenu
              className="cursor-pointer text-3xl text-gray-700 hover:text-blue-800 transition duration-300"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="cursor-pointer text-3xl text-gray-700 hover:text-blue-800 transition duration-300"
              onClick={toggleMenu}
            />
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
            to="/"
            className="flex items-center gap-2 hover:-blue-800 transition duration-300"
          >
            <FaHome className="text-blue-800" /> Home
          </Link>
       
          <Link
            to="/tasks"
            className="flex items-center gap-2 hover:text-blue-800 transition duration-300"
          >
            <FaTasks className="text-blue-800" /> Tasks
          </Link>
          <Link
            to="/company"
            className="flex items-center gap-2 hover:text-blue-800 transition duration-300"
          >
            <FaBuilding className="text-blue-800" /> Investors
          </Link>
          <Link
            to="/startup"
            className="flex items-center gap-2 hover:text-blue-800 transition duration-300"
          >
            <FaBuilding className="text-blue-800" /> Startup
          </Link>
        </nav>

        {/* Mobile User Section */}
        <div className="flex flex-col gap-y-4 mt-6">
          {isLoggedIn ? (
            <>
              <Link
                to="/profile"
                className="text-center p-3 text-white bg-blue-800 rounded-md hover:bg-blue-800 transition duration-300"
              >
                Profile
              </Link>
              <Link
                to="/about"
                className="text-center p-3 text-white bg-blue-800 rounded-md hover:bg-blue-800 transition duration-300"
              >
                 About Us
              </Link>
              <button
                onClick={handleLogout}
                className="text-center p-3 text-white bg-red-600 rounded-md hover:bg-red-700 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signup"
                className="text-center p-3 text-white bg-blue-800 rounded-md hover:bg-blue-800 transition duration-300"
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
