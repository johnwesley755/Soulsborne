import React from "react";
import jobSearchImage from "../assets/job-search.svg"; // Ensure the image exists in the `assets` folder.
import companyLogo1 from "../assets/zomato.svg"; // Example company logo
import companyLogo2 from "../assets/swiggy.svg";
import companyLogo3 from "../assets/wipro.svg";

const JobSearchFilter = () => {
  return (
    <div className="p-10 bg-gradient-to-br from-violet-500 to-indigo-700 text-white rounded-lg shadow-lg">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4">
          Explore Your Career Path
        </h1>
        <p className="text-lg text-white">
          Find the perfect job or hire the best talent to bring your projects to
          life.
        </p>
      </div>

      {/* Filter Section */}
      <div className="bg-white text-gray-800 p-6 rounded-xl shadow-xl mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input
            type="text"
            placeholder="Search for jobs or freelancers..."
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
          <select className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400">
            <option value="">Select a Category</option>
            <option value="web-dev">Web Development</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
            <option value="content-writing">Content Writing</option>
          </select>
          <button className="bg-violet-600 text-white p-4 rounded-lg font-semibold hover:bg-violet-700 transition duration-200">
            Search
          </button>
        </div>
      </div>

      {/* Featured Jobs Section */}
      <div className="bg-white text-gray-800 p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Jobs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Job Card 1 */}
          <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <img
                src={companyLogo1}
                alt="Company Logo"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-bold text-xl">Frontend Developer</h3>
                <p className="text-sm text-gray-600">Tech Solutions Inc.</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-4">
              Build and maintain responsive web interfaces. Strong skills in
              React and JavaScript required.
            </p>
            <ul className="text-sm text-gray-600 mb-4">
              <li>📍 Location: Remote</li>
              <li>💼 Type: Full-time</li>
              <li>💰 Salary: $60k - $80k/year</li>
            </ul>
            <button className="text-violet-600 font-semibold">
              View Details
            </button>
          </div>

          {/* Job Card 2 */}
          <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <img
                src={companyLogo2}
                alt="Company Logo"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-bold text-xl">Graphic Designer</h3>
                <p className="text-sm text-gray-600">Creative Studio</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-4">
              Collaborate with the team to design stunning visuals for
              campaigns. Proficiency in Adobe Suite is a must.
            </p>
            <ul className="text-sm text-gray-600 mb-4">
              <li>📍 Location: New York, NY</li>
              <li>💼 Type: Part-time</li>
              <li>💰 Salary: $25 - $35/hour</li>
            </ul>
            <button className="text-violet-600 font-semibold">
              View Details
            </button>
          </div>

          {/* Job Card 3 */}
          <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex items-center mb-4">
              <img
                src={companyLogo3}
                alt="Company Logo"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-bold text-xl">Content Writer</h3>
                <p className="text-sm text-gray-600">WriteAway Co.</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-4">
              Craft engaging blog posts and articles. Experience in SEO and
              keyword optimization is preferred.
            </p>
            <ul className="text-sm text-gray-600 mb-4">
              <li>📍 Location: Hybrid</li>
              <li>💼 Type: Contract</li>
              <li>💰 Salary: $20 - $30/hour</li>
            </ul>
            <button className="text-violet-600 font-semibold">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearchFilter;
