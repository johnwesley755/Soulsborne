import React from "react";
import uniqueFeatureImage from "../assets/student-progress.svg"; // Ensure you have an image for this section

const WhyChooseUs = () => {
  return (
    <div className="p-10 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 text-white rounded-lg shadow-lg">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4">Why Choose Us?</h1>
        <p className="text-lg text-white">
          Empowering careers and businesses with tailored solutions.
        </p>
      </div>

      {/* Feature Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
          <div className="flex items-center justify-center mb-4">
            <div className="text-5xl text-blue-500">🌟</div>
          </div>
          <h3 className="text-2xl font-bold text-center mb-2">
            Expert Talent Pool
          </h3>
          <p className="text-gray-600 text-center">
            Access highly skilled professionals across diverse industries to
            bring your vision to life.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
          <div className="flex items-center justify-center mb-4">
            <div className="text-5xl text-teal-500">🚀</div>
          </div>
          <h3 className="text-2xl font-bold text-center mb-2">
            Fast Turnaround
          </h3>
          <p className="text-gray-600 text-center">
            Get your projects delivered on time with reliable and efficient
            workflows.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
          <div className="flex items-center justify-center mb-4">
            <div className="text-5xl text-indigo-500">💡</div>
          </div>
          <h3 className="text-2xl font-bold text-center mb-2">
            Innovative Solutions
          </h3>
          <p className="text-gray-600 text-center">
            Benefit from creative strategies and tools tailored to your unique
            needs and goals.
          </p>
        </div>
      </div>

      {/* Unique Features Section */}
      <div className="flex flex-col md:flex-row items-center mt-12 gap-8">
        <div className="flex-1">
          <img
            src={uniqueFeatureImage}
            alt="Unique Feature"
            className="rounded-xl shadow-lg bg-white"
          />
        </div>
        <div className="flex-1 text-white">
          <h2 className="text-4xl font-extrabold mb-4">
            One Platform for All Needs
          </h2>
          <p className="text-lg mb-6 text-white">
            Whether you're searching for your dream job or the perfect
            freelancer, we provide a seamless experience for individuals and
            businesses alike. Our platform combines cutting-edge tools and
            resources to ensure your success.
          </p>
          <ul className="list-disc list-inside space-y-4 text-lg">
            <li>🔍 Simplified job searching and talent hiring.</li>
            <li>💻 Easy-to-use interface with real-time updates.</li>
            <li>🔒 Secure and transparent transactions.</li>
            <li>🌍 Global reach with local connections.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
