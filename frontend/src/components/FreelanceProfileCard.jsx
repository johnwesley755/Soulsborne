import React from "react";

// Replace with actual freelancer data if available
const FreelancerProfileCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl">
      {/* Profile Header with Image */}
      <div className="relative">
        <img
          src="https://via.placeholder.com/150" // Replace with actual profile picture
          alt="Freelancer Profile"
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 text-white">
          <h2 className="text-2xl font-semibold">John Doe</h2>
          <p className="text-sm">Frontend Developer</p>
        </div>
      </div>

      {/* Profile Content */}
      <div className="p-6">
        {/* Bio Section */}
        <div className="mb-6">
          <p className="text-gray-700 text-base mb-4">
            Hello! I'm John, a passionate Frontend Developer with over 5 years
            of experience. I specialize in building beautiful and functional
            websites using modern frameworks like React and Vue.js.
          </p>
          <p className="text-gray-700 text-base mb-4">
            I enjoy creating interactive user experiences, and I'm always
            learning new technologies to enhance my skills.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-violet-700 mb-2">Skills</h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-violet-100 text-violet-600 rounded-lg text-sm">
              React
            </span>
            <span className="px-4 py-2 bg-violet-100 text-violet-600 rounded-lg text-sm">
              JavaScript
            </span>
            <span className="px-4 py-2 bg-violet-100 text-violet-600 rounded-lg text-sm">
              HTML & CSS
            </span>
            <span className="px-4 py-2 bg-violet-100 text-violet-600 rounded-lg text-sm">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 bg-violet-100 text-violet-600 rounded-lg text-sm">
              Git & GitHub
            </span>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-violet-700 mb-2">
            Contact
          </h3>
          <p className="text-gray-700 text-base mb-2">
            <strong>Email:</strong> john.doe@example.com
          </p>
          <p className="text-gray-700 text-base mb-2">
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p className="text-gray-700 text-base mb-2">
            <strong>Location:</strong> New York, NY
          </p>
        </div>

        {/* Portfolio Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-violet-700 mb-2">
            Portfolio
          </h3>
          <p className="text-gray-700 text-base mb-4">
            View some of my recent projects below:
          </p>
          <div className="flex gap-4">
            <a href="#" className="block w-1/3">
              <img
                src="https://via.placeholder.com/300" // Replace with project image
                alt="Project 1"
                className="w-full h-32 object-cover rounded-lg shadow-lg"
              />
              <p className="text-center text-violet-600 mt-2">Project 1</p>
            </a>
            <a href="#" className="block w-1/3">
              <img
                src="https://via.placeholder.com/300" // Replace with project image
                alt="Project 2"
                className="w-full h-32 object-cover rounded-lg shadow-lg"
              />
              <p className="text-center text-violet-600 mt-2">Project 2</p>
            </a>
            <a href="#" className="block w-1/3">
              <img
                src="https://via.placeholder.com/300" // Replace with project image
                alt="Project 3"
                className="w-full h-32 object-cover rounded-lg shadow-lg"
              />
              <p className="text-center text-violet-600 mt-2">Project 3</p>
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg shadow-md hover:bg-violet-700 transition duration-200">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreelancerProfileCard;
