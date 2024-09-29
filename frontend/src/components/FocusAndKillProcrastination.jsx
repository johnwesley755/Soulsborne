import React from "react";
import { Link } from "react-router-dom";
import motivationImage from "../assets/motivation-illustration.svg"; // Replace with your own illustration
import productivityImage from "../assets/productivity-illustration.svg"; // Additional illustration
import successImage from "../assets/success-illustration.svg"; // Another illustration
import focusImage from "../assets/focus-illustration.svg"; // Another illustration

const FocusAndKillProcrastination = () => {
  return (
    <section className="py-20 px-6 lg:px-32 bg-gradient-to-b from-blue-600 to-purple-700">
      <div className="max-w-7xl mx-auto text-center mb-12">
        {/* Headline Section */}
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
          Focus and Kill Procrastination
        </h1>
        <p className="text-lg lg:text-2xl text-white">
          Discover practical steps to eliminate distractions, stay accountable,
          and unlock your full potential.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section 1: Image on Left, Text on Right */}
        <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg mb-12">
          <img
            src={motivationImage}
            alt="Motivation"
            className="w-full lg:w-1/2 p-6 object-contain rounded-l-lg"
          />
          <div className="p-10 lg:p-16 bg-[#f0f0ff] text-[#6c63ff] rounded-r-lg flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">Let's Get Focused</h2>
            <p className="text-lg lg:text-xl mb-6">
              Kill procrastination and unlock your potential. Take the first
              step towards achieving your goals today!
            </p>
          </div>
        </div>

        {/* Section 2: Text on Left, Image on Right */}
        <div className="flex flex-col lg:flex-row-reverse items-center bg-white shadow-lg rounded-lg mb-12">
          <img
            src={productivityImage}
            alt="Productivity"
            className="w-full lg:w-1/2 p-6 object-contain rounded-r-lg"
          />
          <div className="p-10 lg:p-16 bg-[#f0f0ff] text-[#6C63FF] rounded-l-lg flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">Set Clear Goals</h2>
            <p className="text-lg lg:text-xl mb-6">
              Define your objectives and break them into manageable tasks.
              Clarity is key to success!
            </p>
          </div>
        </div>

        {/* Section 3: Image on Left, Text on Right */}
        <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg mb-12">
          <img
            src={successImage}
            alt="Success"
            className="w-full lg:w-1/2 p-6 object-contain rounded-l-lg"
          />
          <div className="p-10 lg:p-16 bg-[#f0f0ff] text-[#6c63ff] rounded-r-lg flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">Eliminate Distractions</h2>
            <p className="text-lg lg:text-xl mb-6">
              Create a focused environment by reducing interruptions. Your
              productivity will soar!
            </p>
          </div>
        </div>

        {/* Section 4: Text on Left, Image on Right */}
        <div className="flex flex-col lg:flex-row-reverse items-center bg-white shadow-lg rounded-lg mb-12">
          <img
            src={focusImage}
            alt="Stay Accountable"
            className="w-full lg:w-1/2 p-6 object-contain rounded-r-lg"
          />
          <div className="p-10 lg:p-16 bg-[#f0f0ff] text-[#6C63FF] rounded-l-lg flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">Stay Accountable</h2>
            <p className="text-lg lg:text-xl mb-6">
              Share your goals with a friend or use apps to track your progress.
              Stay motivated!
            </p>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center mt-12">
          <Link
            to="/"
            className="bg-white text-blue-600 hover:border-blue-500 font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl"
          >
            Get Started now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FocusAndKillProcrastination;
