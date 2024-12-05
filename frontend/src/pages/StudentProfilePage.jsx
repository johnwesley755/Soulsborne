import React from "react";
import ProfileCard from "../components/ProfileHeader";
import CourseCard from "../components/CourseCard";

const StudentProfilePage = () => {
  const student = {
    name: "John Doe",
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "Web Developer & Course Creator, passionate about teaching React and JavaScript.",
    profession: "Web Developer",
  };

  const courses = [
    {
      id: 1,
      title: "Learn React from Scratch",
      description: "A comprehensive guide to React.js, perfect for beginners.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*2AN2uA9ci-5ZSoFgUksZhQ.png",
      price: 49.99,
    },
    {
      id: 2,
      title: "Advanced JavaScript Concepts",
      description:
        "Master the advanced concepts of JavaScript like closures and async programming.",
      image:
        "https://blog.logrocket.com/wp-content/uploads/2021/05/javascript-svg-canvas.png",
      price: 59.99,
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      description:
        "Full-stack development, from front-end to back-end, using modern technologies.",
      image:    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWniV6-mYVeIy0NwNIkr2GK3F5bvkyxQFdvA&s", 
      price: 99.99,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-700 mt-20 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Profile Section */}
        <div className="mb-12">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src={student.profilePicture}
                alt={student.name}
                className="w-32 h-32 rounded-full shadow-lg"
              />
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-800">
                  {student.name}
                </h1>
                <p className="text-lg text-gray-600">{student.profession}</p>
                <p className="mt-4 text-gray-700">{student.bio}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          My Courses
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-bold">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentProfilePage;
