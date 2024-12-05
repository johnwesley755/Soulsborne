// src/components/MemberHighlightCard.jsx

import React from "react";

const MemberHighlightCard = ({ member }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-80 md:w-[350px] lg:w-[400px] xl:w-[450px] mx-auto flex flex-col items-center hover:shadow-2xl">
      {/* Avatar */}
      <img
        src={member.profilePic}
        alt="Member Avatar"
        className="w-28 h-28 rounded-full mb-6 border-4 border-indigo-500"
      />

      {/* Name */}
      <h3 className="text-2xl font-semibold text-center text-gray-900">
        {member.name}
      </h3>

      {/* Profession */}
      <p className="text-gray-500 text-center mt-1 text-lg">
        {member.profession}
      </p>

      {/* Bio */}
      <p className="text-gray-600 mt-4 text-center text-sm">{member.bio}</p>

      {/* Social Media Links */}
      <div className="mt-6 flex space-x-4 justify-center">
        <a
          href={`https://twitter.com/${member.twitter}`}
          className="text-blue-500 hover:text-blue-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a
          href={`https://linkedin.com/in/${member.linkedin}`}
          className="text-blue-700 hover:text-blue-900"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>

      {/* Contact Button */}
      <div className="mt-4">
        <a
          href={`mailto:${member.email}`}
          className="bg-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition duration-300"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default MemberHighlightCard;
