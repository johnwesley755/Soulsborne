import React from "react";
import { NavLink } from "react-router-dom";
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from "react-icons/md";

const Navbar = ({ containerStyles }) => {
  return (
    <nav className={containerStyles}>
      <NavLink
        to={"/home"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <MdHomeFilled />
          Home
        </div>
      </NavLink>
      <NavLink
        to={"/profile"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <MdCategory />
          Profile
        </div>
      </NavLink>
      <NavLink
        to={"/library"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <MdShop2 />
          Library
        </div>
      </NavLink>
      <NavLink
        to={"/my"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <MdContacts />
          My Achievements
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
