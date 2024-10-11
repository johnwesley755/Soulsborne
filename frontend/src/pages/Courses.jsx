import React from "react";

const Courses = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-green-400 to-blue-500 pt-16 pb-20">
      <div className="max_padd_container z-10 relative flex flex-col gap-12">
        <div className="text-center mb-10">
          <h1 className="text-6xl font-bold text-white mb-4">Courses</h1>
          <p className="text-white text-xl font-semibold">
            Explore our courses to enhance your skills!
          </p>
        </div>

        {/* Course List */}
        <div className="flex flex-col gap-12">
          {/* Sample Course Item */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-black">
            <h2 className="text-4xl font-bold mb-4">HTML & CSS Basics</h2>
            <p className="text-xl mb-4">
              Learn the fundamentals of web development.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 font-semibold">
              Start Learning
            </button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-black">
            <h2 className="text-4xl font-bold mb-4">JavaScript Fundamentals</h2>
            <p className="text-xl mb-4">
              Dive into JavaScript programming and build interactive websites.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 font-semibold">
              Start Learning
            </button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-black">
            <h2 className="text-4xl font-bold mb-4">React Basics</h2>
            <p className="text-xl mb-4">
              Understand the core concepts of React and create dynamic UIs.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 font-semibold">
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
