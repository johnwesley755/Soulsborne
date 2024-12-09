import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/soulsborne(1).png"; // Replace with the actual path to your logo file
  
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About Us */}
        <div className="space-y-4">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
          <p className="font-bold text-gray-100">
            Empowering individuals and businesses with innovative solutions to
            achieve their goals.
          </p>
          <Link
            to="/about"
            className="text-indigo-400 hover:text-white font-bold"
          >
            Learn more &rarr;
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/services" className="hover:text-indigo-400 font-bold">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-indigo-400 font-bold">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-indigo-400 font-bold">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-indigo-400 font-bold">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
          <p className="font-bold text-white">
            <span>Email:</span> support@soulsborne.com
          </p>
          <p className="font-bold text-white">
            <span>Phone:</span> +91 98765 43210
          </p>
          <p className="font-bold text-white">
            <span>Address:</span> 123 Main Street, City, Country
          </p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm font-bold">
        &copy; {new Date().getFullYear()} Soulsborne. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
