import React from "react";
import { NavLink } from "react-router-dom";
// Replace with your actual image paths
import jobPostImage from "../assets/job-search.svg"; // Placeholder image for job posting section

const PostJobCTA = () => {
  return (
    <div className="bg-gradient-to-br from-violet-500 to-indigo-600 text-white py-12 px-6 rounded-lg shadow-lg mt-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Section: Text Content */}
        <div className="text-center font-semibold md:text-left md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Looking for Talented Freelancers? Post Your Job Now!
          </h2>
          <p className="text-lg mb-6 text-white">
            Finding the right talent for your project is easy! Post your job
            today and connect with experienced professionals ready to bring your
            ideas to life.
          </p>
          <p className="text-lg mb-6 text-white">
            Whether you're looking for web developers, designers, or digital
            marketers, our platform connects you with skilled freelancers in
            every industry.
          </p>
          {/* Call-to-action Button */}
          <div>
            <NavLink to='/jobpost' className="px-8 py-4 btn_light_rounded bg-white font-semibold rounded-lg shadow-md transition duration-200">
              Post Your Job
            </NavLink>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2">
          <img
            src={jobPostImage} // Replace with your actual image
            alt="Post Job Illustration"
            className="w-full h-auto bg-white rounded-lg shadow-xl transform hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default PostJobCTA;
