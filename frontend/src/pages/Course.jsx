import React from "react";
import { useParams } from "react-router-dom";

// Sample course data (replace this with data from an API or database)
const courseData = {
  1: {
    title: "HTML & CSS Basics",
    description:
      "Learn the fundamentals of HTML & CSS to build beautiful, responsive websites.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video URL
    instructor: "John Doe",
    duration: "6 hours",
    difficulty: "Beginner",
    prerequisites: [
      "Basic computer knowledge",
      "Willingness to learn HTML & CSS",
    ],
    benefits: [
      "Understand HTML structure",
      "Style web pages with CSS",
      "Build responsive designs",
      "Learn best practices for front-end web development",
    ],
    testimonials: [
      {
        name: "Jane Doe",
        feedback:
          "This course helped me build my first website. The concepts are explained so clearly!",
      },
      {
        name: "Mark Smith",
        feedback:
          "Great course for beginners! I now feel confident starting my web development journey.",
      },
    ],
    content: [
      "Module 1: Introduction to HTML",
      "Module 2: CSS Fundamentals",
      "Module 3: Building a Web Page",
      "Module 4: Responsive Design Basics",
    ],
  },
  2: {
    title: "JavaScript Fundamentals",
    description:
      "Get started with JavaScript programming and learn to create interactive websites.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video URL
    instructor: "Jane Smith",
    duration: "8 hours",
    difficulty: "Intermediate",
    prerequisites: [
      "Basic knowledge of HTML & CSS",
      "Familiarity with web development",
    ],
    benefits: [
      "Understand JavaScript basics",
      "Learn how to manipulate the DOM",
      "Create interactive web pages",
      "Handle events and form submissions",
    ],
    testimonials: [
      {
        name: "Sarah Lee",
        feedback:
          "The exercises and examples helped me understand JavaScript concepts better than any book.",
      },
      {
        name: "David Johnson",
        feedback:
          "I gained a lot of hands-on experience. JavaScript now feels so much easier to understand.",
      },
    ],
    content: [
      "Module 1: JavaScript Basics",
      "Module 2: Working with DOM",
      "Module 3: Event Handling",
      "Module 4: Form Validation",
    ],
  },
  3: {
    title: "React Basics",
    description:
      "Learn how to build user interfaces with React and create dynamic web applications.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video URL
    instructor: "Michael Brown",
    duration: "10 hours",
    difficulty: "Advanced",
    prerequisites: [
      "Basic knowledge of JavaScript",
      "Familiarity with ES6 syntax",
    ],
    benefits: [
      "Understand React components and hooks",
      "Learn to manage state and props",
      "Build dynamic, real-time web applications",
      "Understand React lifecycle and rendering",
    ],
    testimonials: [
      {
        name: "Anna Carter",
        feedback:
          "React was intimidating at first, but this course made it so easy to understand. Highly recommend!",
      },
      {
        name: "Ethan Adams",
        feedback:
          "This course helped me transition from plain JavaScript to React in no time. Excellent content!",
      },
    ],
    content: [
      "Module 1: Introduction to React",
      "Module 2: Component Basics",
      "Module 3: State Management",
      "Module 4: Handling Events in React",
    ],
  },
};

const Course = () => {
  const { id } = useParams(); // Get course ID from URL parameters
  const course = courseData[id]; // Retrieve the course data based on ID

  if (!course) {
    return <h2 className="text-center text-2xl">Course not found!</h2>;
  }

  return (
    <div className="bg-gray-100 mt-20 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Course Overview Section */}
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          {/* Video Preview */}
          <div className="md:w-1/2">
            <video
              src={course.videoUrl}
              controls
              className="w-full rounded-lg shadow-md"
            ></video>
          </div>

          {/* Course Details */}
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-gray-700 mb-4">{course.description}</p>
            <p className="text-gray-600">
              <strong>Instructor:</strong> {course.instructor}
            </p>
            <p className="text-gray-600">
              <strong>Duration:</strong> {course.duration}
            </p>
            <p className="text-gray-600">
              <strong>Difficulty:</strong> {course.difficulty}
            </p>
          </div>
        </div>

        {/* Prerequisites Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
          <ul className="list-disc list-inside text-gray-700">
            {course.prerequisites.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Benefits Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">What You'll Learn</h2>
          <ul className="list-disc list-inside text-gray-700">
            {course.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        {/* Course Content Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Course Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.content.map((module, index) => (
              <div
                key={index}
                className="bg-white border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {module.split(":")[0]}
                </h3>
                <p className="text-gray-600">{module.split(":")[1]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Student Reviews</h2>
          <div className="space-y-4">
            {course.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-gray-800">
                  <strong>{testimonial.name}</strong>: {testimonial.feedback}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
