import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { MdClose, MdMenu } from "react-icons/md";
import soulsborneImg from "../assets/soulsborne(1).png";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false); // State to manage mobile menu toggle
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  // Toggle menu function
  const toggleMenu = () => setMenuOpened(!menuOpened);

  // Handle logout function
  const handleLogout = () => {
    // Perform logout logic here (e.g., clearing session or token)
    setIsLoggedIn(false);
    // You can also redirect the user if needed, e.g., history.push("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-white font-semibold ">
      <div className="flex justify-between items-center py-4 px-6 lg:px-12">
        {/* Logo */}
        <div className="flex-shrink-0 ml-4">
          <Link to="/">
            <img
              src={soulsborneImg} // Replace with your logo URL or import statement
              alt="Logo"
              className="h-12 w-auto" // Adjust logo size
            />
          </Link>
        </div>

        {/* Navbar for Desktop */}
        <Navbar containerStyles="hidden md:flex gap-x-8 xl:gap-x-12" />

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

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-x-6">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Logout
            </button>
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
        <Navbar containerStyles="flex flex-col gap-y-6" />

        {/* Mobile Sign Up and Login */}
        <div className="flex flex-col gap-y-4 mt-6">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-center p-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Logout
            </button>
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
