import React from "react";
import { NavLink } from "react-router-dom";
// Replace with your actual image paths
import exploreGigsImage from "../assets/hero-img.svg"; // Placeholder image for the new section

const ExploreGigsCTA = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-blue-500 text-white py-12 px-6 rounded-lg shadow-lg mt-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Section: Image */}
        <div className="md:w-1/2">
          <img
            src={exploreGigsImage} // Replace with your actual image
            alt="Explore Gigs Illustration"
            className="w-full h-auto bg-white rounded-lg shadow-xl transform hover:scale-105 transition duration-300"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Discover Exciting Gigs & Opportunities!
          </h2>
          <p className="text-lg mb-6 text-white">
            Whether you're a freelancer seeking your next project or someone
            eager to build connections, our platform is designed to make your
            search seamless and efficient.
          </p>
          <p className="text-lg mb-6 text-white">
            Explore a wide range of opportunities, from short-term gigs to
            long-term contracts, across various industries and skill sets.
          </p>
          {/* Call-to-action Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <NavLink
              to="/explore-gigs"
              className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-200"
            >
              Explore Gigs
            </NavLink>
            <NavLink
              to="/join-us"
              className="px-8 py-4 bg-transparent border border-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-indigo-600 transition duration-200"
            >
              Join as Freelancer
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreGigsCTA;
