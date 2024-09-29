import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: About Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="mb-4">
            We are a company dedicated to helping individuals and businesses
            achieve their goals through innovative solutions and services.
          </p>
          <Link to="/about" className="text-indigo-400 hover:underline">
            Learn more
          </Link>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/services" className="hover:text-indigo-400">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-indigo-400">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-indigo-400">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-indigo-400">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Follow Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" className="hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" className="hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Soulsborne. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
