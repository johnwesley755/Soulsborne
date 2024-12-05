import React from "react";
import { NavLink } from "react-router-dom";
import { FaBriefcase, FaHandshake, FaUniversity } from "react-icons/fa";

const GetPlaced = () => {
  return (
    <section className="bg-gradient-to-tl from-indigo-900 to-purple-900 py-20 px-10 lg:px-32 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-8">
          Get Placed Directly by Your Dream Company
        </h2>
        <p className="text-lg lg:text-xl font-semibold text-gray-200 mb-12">
          Discover opportunities to work with top companies that align with your
          career goals.
        </p>

        {/* Card Layout for Career Opportunities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Career Opportunities */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img
              src="https://plus.unsplash.com/premium_photo-1661335260175-5735a1d487e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Career Opportunities"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <FaBriefcase className="text-4xl text-purple-900 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mt-4 text-black">
                Career Opportunities
              </h3>
              <p className="text-gray-700 mt-2">
                Explore job openings tailored to your skills and interests.
              </p>
              <NavLink
                to="/careers"
                className="mt-4 inline-block text-purple-600 underline hover:text-purple-800"
              >
                Explore Careers
              </NavLink>
            </div>
          </div>

          {/* Card 2: Direct Connections */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img
              src="https://plus.unsplash.com/premium_photo-1682608389116-c5e55258f7fe?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Direct Connections"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <FaHandshake className="text-4xl text-purple-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mt-4 text-black">
                Direct Connections
              </h3>
              <p className="text-gray-700 mt-2">
                Build relationships with recruiters and hiring managers.
              </p>
              <NavLink
                to="/networking"
                className="mt-4 inline-block text-purple-600 underline hover:text-purple-800"
              >
                Join Networking Events
              </NavLink>
            </div>
          </div>

          {/* Card 3: Skill Development */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Skill Development"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <FaUniversity className="text-4xl text-purple-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mt-4 text-black">
                Skill Development
              </h3>
              <p className="text-gray-700 mt-2">
                Enhance your skills through tailored workshops.
              </p>
              <NavLink
                to="/training"
                className="mt-4 inline-block text-purple-600 underline hover:text-purple-800"
              >
                View Training Programs
              </NavLink>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <NavLink
          to="/apply"
          className="bg-white text-purple-600 hover:border-purple-500 font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl"
        >
          Apply Now for Your Dream Job
        </NavLink>
      </div>
    </section>
  );
};

export default GetPlaced;
