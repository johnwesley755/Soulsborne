// src/components/ResourceCard.jsx

import React from "react";
import { FaLink, FaRegClock } from "react-icons/fa"; // Importing icons for added visual appeal

const ResourceCard = ({ resource }) => {
  return (
    <div className="w-full sm:w-80 md:w-96 lg:w-96 xl:w-96 bg-white border p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      {/* Resource Image */}
      <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
        <img
          src={resource.imageUrl}
          alt={resource.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Resource Title */}
      <h3 className="text-2xl font-semibold text-gray-900">{resource.title}</h3>

      {/* Resource Description */}
      <p className="text-gray-500 mt-2">{resource.description}</p>

      {/* Tags */}
      <div className="flex mt-3 gap-x-2 text-sm text-violet-500">
        {resource.tags?.map((tag, index) => (
          <span key={index} className="bg-violet-100 px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Resource Link */}
      <div className="mt-4 flex justify-between items-center">
        <a
          href={resource.link}
          className="text-violet-500 flex items-center gap-x-2 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLink />
          <span>Read More</span>
        </a>

        {/* Resource Date */}
        <div className="text-gray-400 text-sm flex items-center gap-x-1">
          <FaRegClock />
          <span>{resource.date}</span>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
