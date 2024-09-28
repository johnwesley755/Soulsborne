import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { MdClose, MdMenu } from "react-icons/md";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false); // State to manage mobile menu toggle

  // Toggle menu function
  const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-white shadow-md font-semibold">
      <div className="flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="mr-48 ml-10 mt-4">
          <Link to="/">
            {" "}
            {/* Link to Home page */}
            <img
              src=""
              alt="Logo"
              className="block"
              style={{ height: "50px", width: "auto" }}
            />
          </Link>
        </div>

        {/* Navbar Desktop */}
        <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10"} />

        {/* Mobile Menu Toggle */}
        <div className="flex items-center">
          {!menuOpened ? (
            <MdMenu
              className="md:hidden cursor-pointer text-2xl"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="md:hidden cursor-pointer text-2xl absolute top-4 right-6"
              onClick={toggleMenu}
            />
          )}
        </div>

        {/* Login Button */}
        <Link to="/login">
          <button className="hidden md:block btn_dark_rounded">Login</button>
        </Link>
      </div>

      {/* Mobile Navbar */}
      <Navbar
        containerStyles={`${
          menuOpened
            ? "flex flex-col gap-y-4 fixed top-16 right-0 p-6 bg-white shadow-lg w-64"
            : "hidden"
        }`}
      />

      {/* Additional Mobile Links for Login and Signup */}
      {menuOpened && (
        <div className="flex flex-col gap-y-4 px-6 py-2">
          <Link
            to="/signup"
            className="text-center p-2 bg-blue-500 text-white rounded-md"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="text-center p-2 bg-gray-700 text-white rounded-md"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
