import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { MdClose, MdMenu } from "react-icons/md";
import soulsborneImg from "../assets/soulsborne(1).png"
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
    <header className="fixed top-0 left-0 w-full z-20 bg-white font-semibold">
      <div className="flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex-shrink-0 ml-4">
          <Link to="/">
            <img
              src={soulsborneImg} // Replace with your logo URL or import statement
              alt="Logo"
              className="h-10 w-100" // Adjust logo size
            />
          </Link>
        </div>

        {/* Navbar for Desktop */}
        <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10"} />

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          {!menuOpened ? (
            <MdMenu
              className="cursor-pointer text-3xl" // Mobile menu icon
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="cursor-pointer text-3xl" // Close menu icon
              onClick={toggleMenu}
            />
          )}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-x-4">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="btn_dark_rounded">
              Logout
            </button>
          ) : (
            <>
              <Link to="/signup" className="btn_secondary_rounded">
                Sign Up
              </Link>
              <Link to="/login">
                <button className="btn_dark_rounded">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`${
          menuOpened
            ? "flex flex-col gap-y-4 fixed top-16 right-0 p-6 bg-white shadow-lg w-64 z-10"
            : "hidden"
        }`}
      >
        <Navbar containerStyles={"flex flex-col gap-y-4"} />

        {/* Mobile Sign Up and Login */}
        <div className="flex flex-col gap-y-4 mt-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-center p-2 btn_dark_rounded text-white rounded-md"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/signup"
                className="text-center p-2 btn_secondary_rounded text-white rounded-md"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="text-center p-2 btn_dark_rounded text-white rounded-md"
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
