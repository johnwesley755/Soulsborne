import React from "react";
import { Link } from "react-router-dom";
import skillImage1 from "../assets/skill-illustration1.svg"; // First illustration image
import skillImage2 from "../assets/skill-illustration2.svg"; // Second illustration image
import skillImage3 from "../assets/skill-illustration3.svg"; // Third illustration image
import skillImage4 from "../assets/skill-illustration4.svg"; // Fourth illustration image
import skillImage5 from "../assets/skill-illustration5.svg"; // Fifth illustration image
import skillImage6 from "../assets/skill-illustration6.svg"; // Sixth illustration image

const SharpenSkills = () => {
  return (
    <section className="bg-gradient-to-b from-blue-600 to-purple-700 py-20 px-10 lg:px-32 text-white mt-10">
      {/* Component container */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Top Text Section */}
        <h2 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
          Sharpen Your Skills <br /> with Us, On-Demand
        </h2>
        <p className="text-lg lg:text-2xl text-gray-200 mb-12">
          Discover a range of skills to master. Whether you're enhancing your
          tech knowledge or diving into creative arts, we've got you covered.
        </p>

        {/* Image Gallery with Skill Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Skill 1: Web Development */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src={skillImage1}
              alt="Web Development"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-black">Web Development</h3>
            <p className="text-gray-700 mt-2">
              Learn how to build responsive websites and modern web apps using
              the latest technologies like React, HTML, CSS, and JavaScript.
            </p>
          </div>

          {/* Skill 2: Graphic Design */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src={skillImage2}
              alt="Graphic Design"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-black">Graphic Design</h3>
            <p className="text-gray-700 mt-2">
              Create stunning visuals and designs using tools like Adobe
              Photoshop, Illustrator, and Figma.
            </p>
          </div>

          {/* Skill 3: Digital Marketing */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src={skillImage3}
              alt="Digital Marketing"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-black">Digital Marketing</h3>
            <p className="text-gray-700 mt-2">
              Master the art of online marketing, including SEO, social media
              strategies, and paid advertising.
            </p>
          </div>

          {/* Skill 4: Data Science */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src={skillImage4}
              alt="Data Science"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-black">Data Science</h3>
            <p className="text-gray-700 mt-2">
              Dive into data analysis, machine learning, and big data
              technologies using Python, R, and TensorFlow.
            </p>
          </div>

          {/* Skill 5: Public Speaking */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src={skillImage5}
              alt="Public Speaking"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-black">Cybersecurity</h3>
            <p className="text-gray-700 mt-2">
            Master the fundamentals of cybersecurity, including network defense, threat analysis,
            and ethical hacking, to protect digital assets. 
            </p>
          </div>

          {/* Skill 6: Project Management */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img
              src={skillImage6}
              alt="Project Management"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-black">
              Project Management
            </h3>
            <p className="text-gray-700 mt-2">
              Organize, plan, and execute successful projects using Agile
              methodologies and tools like Jira and Trello.
            </p>
          </div>
        </div>

        {/* Call to Action Button */}
        <Link
          to="/courses"
          className="bg-white text-blue-600 hover:border-blue-500 font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl"
        >
          Start Learning Now
        </Link>
      </div>
    </section>
  );
};

export default SharpenSkills;
