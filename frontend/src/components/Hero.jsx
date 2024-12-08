import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaUsers,
  FaChartLine,
  FaRegSmile,
  FaTrophy,
  FaGamepad,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://videos.pexels.com/video-files/3969453/3969453-uhd_2560_1440_25fps.mp4" // Replace with your desired video
            type="video/mp4"
          />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900 via-black to-indigo-900 opacity-70"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-8 text-center text-white">
        {/* Headline and Description */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-sm:mt-20 font-extrabold leading-tight mb-6 px-2">
          Unlock Your <span className="text-yellow-400">Potential</span> with
          Creativity
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 font-bold mb-6 max-w-md sm:max-w-xl px-2">
          Dare to dream, embrace boldness, and explore the depths of your
          passion. Whether innovating in{" "}
          <span className="text-violet-400">tech</span> or mastering the
          challenges of <span className="text-yellow-400">Soulsborne</span>,
          your adventure starts here.
        </p>
        <NavLink
          to="/freelance  "
          className="px-4 py-2 sm:px-6 sm:py-3 bg-violet-500 hover:bg-yellow-500 rounded-lg text-sm sm:text-base font-semibold shadow-md transition-transform transform hover:scale-105"
        >
          Get Started
        </NavLink>

        {/* Statistics Section */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-5xl w-full">
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-2 sm:p-3 bg-violet-500 rounded-full mb-2 sm:mb-3">
              <FaUsers className="text-yellow-400 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-yellow-300">
              20,000+
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">Global Users</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-2 sm:p-3 bg-yellow-500 rounded-full mb-2 sm:mb-3">
              <FaChartLine className="text-violet-500 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-yellow-300">
              600%
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">Growth Rate</p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-2 sm:p-3 bg-violet-500 rounded-full mb-2 sm:mb-3">
              <FaRegSmile className="text-yellow-400 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-yellow-300">
              98%
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Customer Satisfaction
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-2 sm:p-3 bg-yellow-500 rounded-full mb-2 sm:mb-3">
              <FaTrophy className="text-violet-500 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-yellow-300">
              50+
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">Awards Won</p>
          </div>

          {/* Stat 5 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-2 sm:p-3 bg-violet-500 rounded-full mb-2 sm:mb-3">
              <FaGamepad className="text-yellow-400 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-yellow-300">
              Soulsborne
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">EduTech Platform</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
