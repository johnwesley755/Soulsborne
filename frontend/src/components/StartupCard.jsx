// src/components/StartupCard.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing

const StartupCard = ({ startup }) => {
  return (
    <div className="startup-card bg-white border-2 rounded-lg shadow-2xl p-6 m-4 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      {/* Title */}
      <h2 className="text-3xl font-extrabold text-gray-900 mb-3 text-center">
        {startup.name}
      </h2>

      {/* Short Description */}
      <p className="text-md text-gray-700 mb-4 opacity-80">
        {startup.description.slice(0, 100)}...
      </p>

      {/* Image */}
      <div className="image-container mb-6">
        <img
          src={startup.image}
          alt={startup.name}
          className="w-full h-56 object-cover rounded-lg shadow-md hover:shadow-lg transition duration-300"
        />
      </div>

      {/* Learn More Button */}
      <div className="text-center mt-6">
        <Link
          to={`/startup/${startup.id}`}
          className="bg-gradient-to-r from-indigo-900 to-violet-900 text-white py-2 px-8 text-lg font-semibold shadow-lg transform transition duration-200 hover:scale-105 hover:from-indigo-900 hover:to-violet-900"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default StartupCard;
