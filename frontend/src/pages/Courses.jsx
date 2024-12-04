import React from "react";
import { useNavigate } from "react-router-dom";

// Sample course data (you can replace this with data from an API or database)
const courses = [
  {
    id: 1,
    title: "HTML & CSS Basics",
    description:
      "Learn the fundamentals of HTML & CSS to build beautiful websites.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video URL
    duration: "6 hours",
    difficulty: "Beginner",
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    description:
      "Get started with JavaScript programming and learn to create interactive websites.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video URL
    duration: "8 hours",
    difficulty: "Intermediate",
  },
  {
    id: 3,
    title: "React Basics",
    description:
      "Learn how to build user interfaces with React and create dynamic web applications.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video URL
    duration: "10 hours",
    difficulty: "Advanced",
  },
];

const Courses = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`); // Navigate to the specific course page
  };

  return (
    <div className="bg-gray-100 mt-20 min-h-screen p-6">
      <div className="max-w-6xl mx-auto mt-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Available Courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              {/* Video Preview */}
              <div className="relative">
                <video
                  src={course.videoUrl}
                  className="w-full h-48 object-cover rounded-t-lg"
                  controls
                ></video>
              </div>

              {/* Course Details */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {course.title}
                </h2>
                <p className="text-gray-600 mt-2">{course.description}</p>

                {/* Additional Details */}
                <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                  <p>
                    <strong>Duration:</strong> {course.duration}
                  </p>
                  <p>
                    <strong>Difficulty:</strong> {course.difficulty}
                  </p>
                </div>

                {/* Learn Now Button */}
                <button
                  className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                  onClick={() => handleCourseClick(course.id)}
                >
                  Learn Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
