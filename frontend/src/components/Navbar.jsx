import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  FaTasks,
  FaBuilding,
  FaSuitcase,
} from "react-icons/fa"; // Importing different FontAwesome icons

const Navbar = ({ containerStyles }) => {
  return (
    <nav className={containerStyles}>



      {/* Navigation Links */}
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <FaHome /> {/* Home Icon */}
          Home
        </div>
      </NavLink>
      <NavLink
        to={"/profile"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <FaUserAlt /> {/* Profile Icon */}
          Profile
        </div>
      </NavLink>
      <NavLink
        to={"/tasks"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <FaTasks /> {/* Tasks Icon */}
          Tasks
        </div>
      </NavLink>
      <NavLink
        to={"/company"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <FaBuilding /> {/* Company Icon */}
          Company
        </div>
      </NavLink>
      <NavLink
        to={"/freelance"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <FaSuitcase /> {/* Freelance Icon */}
          Freelancing
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
