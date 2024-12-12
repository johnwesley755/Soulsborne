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
      <a 
        href="https://www.example.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="nav-item"
      >
        Pitch Deck
      </a>
      <NavLink
        to={"/company"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <FaBuilding /> {/* Company Icon */}
          Investors
        </div>
      </NavLink>

    </nav>
  );
};

export default Navbar;
