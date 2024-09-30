import React from "react";
import { NavLink } from "react-router-dom";
import { FaBriefcase, FaHandshake, FaUniversity } from "react-icons/fa";

const GetPlaced = () => {
  return (
    <section className="bg-gradient-to-b from-blue-600 to-purple-700 py-20 px-10 lg:px-32 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
          Get Placed Directly by Your Dream Company
        </h2>
        <p className="text-lg lg:text-2xl text-gray-200 mb-12">
          Discover opportunities to work with top companies that align with your
          career goals.
        </p>

        {/* Card Layout for Career Opportunities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Career Opportunities */}
          <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105 shadow-lg cursor-pointer">
            <FaBriefcase className="text-4xl text-secondary mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mt-4 text-black">Career Opportunities</h3>
            <p className="text-gray-700 mt-2">
              Explore a wide range of job openings across various industries
              that match your skills and interests.
            </p>
            <NavLink
              to="/careers"
              className="mt-4 inline-block text-secondary underline hover:text-secondary-dark"
            >
              Explore Careers
            </NavLink>
          </div>

          {/* Card 2: Direct Connections */}
          <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105 shadow-lg cursor-pointer">
            <FaHandshake className="text-4xl text-secondary mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mt-4 text-black">Direct Connections</h3>
            <p className="text-gray-700 mt-2">
              Build relationships with recruiters and hiring managers through
              networking events and workshops.
            </p>
            <NavLink
              to="/networking"
              className="mt-4 inline-block text-secondary underline hover:text-secondary-dark"
            >
              Join Networking Events
            </NavLink>
          </div>

          {/* Card 3: Skill Development */}
          <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105 shadow-lg cursor-pointer">
            <FaUniversity className="text-4xl text-secondary mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mt-4 text-black">Skill Development</h3>
            <p className="text-gray-700 mt-2">
              Participate in skill enhancement programs and workshops tailored
              to help you stand out to employers.
            </p>
            <NavLink
              to="/training"
              className="mt-4 inline-block text-secondary underline hover:text-secondary-dark"
            >
              View Training Programs
            </NavLink>
          </div>
        </div>

        {/* Call to Action Button */}
        <NavLink
          to="/apply"
          className="bg-white text-blue-600 hover:border-blue-500 font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl"
        >
          Apply Now for Your Dream Job
        </NavLink>
      </div>
    </section>
  );
};

export default GetPlaced;
