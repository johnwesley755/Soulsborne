// src/components/ProfileCard.jsx

import React from "react";

const ProfileCard = ({ student }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs mx-auto">
      <img
        src={student.profilePicture}
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-2xl font-semibold text-center">{student.name}</h2>
      <p className="text-center text-gray-600">{student.bio}</p>
      <div className="flex justify-center mt-4">
        <span className="text-sm bg-blue-500 text-white py-1 px-3 rounded-full">
          {student.profession}
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;
