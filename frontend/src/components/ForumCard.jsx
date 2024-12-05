// src/components/ForumCard.jsx

import React from "react";

const ForumCard = ({ forum }) => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-600 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
      {/* Avatar */}
      <div className="flex items-center mb-4">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg" // Replace with actual user avatar or placeholder
          alt="User Avatar"
          className="w-12 h-12 rounded-full border-4 border-white mr-4"
        />
        <div>
          <h3 className="text-2xl font-bold text-white">{forum.topic}</h3>
          <p className="text-sm text-white">Posted by John Doe</p>
        </div>
      </div>

      {/* Forum Details */}
      <p className="text-white font-semibold text-sm mt-2">
        {forum.description || "No description available."}
      </p>
      <p className="text-white text-sm mt-4">{forum.replies} replies</p>

      {/* Forum Footer */}
      <div className="mt-6">
        <p className="text-white text-xs">Posted 2 hours ago</p>
      </div>
    </div>
  );
};

export default ForumCard;
