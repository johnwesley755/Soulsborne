// src/components/NewsCard.jsx

import React from "react";

const NewsCard = ({ news }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 relative overflow-hidden">
      {/* Image Section with Gradient Overlay */}
      <div className="relative">
        <img
          src={news.image || "https://via.placeholder.com/600x300"}
          alt={news.title}
          className="w-full h-56 object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
          <span className="text-lg font-bold">{news.category}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-3xl font-bold text-gray-900 mt-4 hover:text-blue-600 transition-colors duration-300">
        {news.title}
      </h3>

      {/* Date */}
      <p className="text-gray-500 text-sm mt-2">{news.date}</p>

      {/* Summary */}
      <p className="text-gray-600 mt-4 text-lg">{news.summary}</p>

      {/* Actions - Read More and Social Interaction */}
      <div className="mt-6 flex justify-between items-center">
        <a
          href={news.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm font-medium transition-colors duration-300"
        >
          Read more
        </a>
        <div className="flex items-center space-x-3">
          <button className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17l5-5m0 0l-5-5m5 5H10"
              />
            </svg>
          </button>
          <button className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
