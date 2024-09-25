import { React, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md"; // Importing icons for the menu

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  // Toggle menu function
  const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <div>
      <Navbar />
      <header>
        <div>
          {/* Adding `to` prop for Link */}
          <Link to="/">
            <img src="" alt="logo" className="block" />
          </Link>

          {/* Navbar Desktop */}
          <Navbar
            containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}
          />

          {/* Navbar Mobile */}
          <Navbar
            containerStyles={`${
              menuOpened
                ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
                : "flex item-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
            }`}
          />

          {/* Menu Toggle Button */}
          <div className="flexBetween gap-x-1 sm:gap-x-2 bold-16">
            {!menuOpened ? (
              <MdMenu
                className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary"
                onClick={toggleMenu}
              />
            ) : (
              <MdClose
                className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
