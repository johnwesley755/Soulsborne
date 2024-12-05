import React from "react";
import CourseCard from "../components/CourseCard";

const SellerPage = () => {
  const courses = [
    {
      id: 1,
      title: "React for Beginners",
      description: "Learn the basics of React",
      image: "/assets/gig1.jpg",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description: "Master JavaScript fundamentals",
      image: "/assets/gig1.jpg",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">Your Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default SellerPage;
