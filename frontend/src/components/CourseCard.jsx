// src/components/CourseCard.jsx

import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
      <img
        src={course.image}
        alt="Course"
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
      <p className="text-gray-600 mt-2">{course.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-500">Price: ${course.price}</span>
        <Link
          to={`/course/${course.id}`}
          className="text-blue-500 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
