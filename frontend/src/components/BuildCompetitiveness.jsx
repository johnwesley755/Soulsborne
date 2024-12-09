import React from "react";
import { Link } from "react-router-dom";

// Replace the URLs below with appropriate open-license images
const competitionImage =
  "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const growthImage =
  "https://media.istockphoto.com/id/1191744336/photo/young-man-runs-on-mountain-ridge-at-sunrise.webp?a=1&b=1&s=612x612&w=0&k=20&c=LbF9-gwIq7jWc1jdvOCB3B1lNFtVeT7F55ObPAWLu9g=";
const challengeImage =
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const BuildCompetitiveness = () => {
  return (
    <section className="py-20 px-6 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Headline Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl max-sm:text-4xl font-extrabold text-indigo-900 mb-6">
            Build Your Competitiveness
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto">
            Elevate your skills and rise to the top. Compete with confidence and
            perseverance to unlock your true potential and achieve success in
            every arena.
          </p>
        </div>

        {/* Section 1: Overview */}
        <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-xl mb-12 transition-all hover:shadow-2xl">
          <img
            src={competitionImage}
            alt="Competition"
            className="w-full lg:w-1/2 p-4 lg:p-6 object-cover rounded-l-xl"
          />
          <div className="p-8 lg:p-12 text-left bg-gradient-to-b from-indigo-50 via-white to-indigo-100 rounded-r-xl">
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">
              Enter the Arena
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-6">
              Challenge yourself to stay ahead in a competitive world. With
              dedication and consistent effort, you can sharpen your edge and
              achieve greatness.
            </p>
            <Link
              to="/"
              className="text-indigo-600 font-medium hover:text-indigo-900 transition"
            >
              Learn More →
            </Link>
          </div>
        </div>

        {/* Section 2: Growth through Competition */}
        <div className="flex flex-col lg:flex-row-reverse items-center bg-white shadow-lg rounded-xl mb-12 transition-all hover:shadow-2xl">
          <img
            src={growthImage}
            alt="Growth"
            className="w-full lg:w-1/2 p-4 lg:p-6 object-cover rounded-r-xl"
          />
          <div className="p-8 lg:p-12 bg-gradient-to-b from-indigo-50 via-white to-indigo-100 rounded-l-xl">
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">
              Growth through Competition
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-6">
              Each challenge drives personal growth, sharpening your
              problem-solving skills, and preparing you for bigger achievements.
              Let competition be your teacher.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li className="mb-3">Build new and refine existing skills</li>
              <li className="mb-3">Improve strategic thinking</li>
              <li className="mb-3">Develop resilience and adaptability</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Overcoming Challenges */}
        <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-xl mb-12 transition-all hover:shadow-2xl">
          <img
            src={challengeImage}
            alt="Challenge"
            className="w-full lg:w-1/2 p-4 lg:p-6 object-cover rounded-l-xl"
          />
          <div className="p-8 lg:p-12 bg-gradient-to-b from-indigo-50 via-white to-indigo-100 rounded-r-xl">
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">
              Overcome Challenges
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-6">
              Turn obstacles into opportunities. Every setback is a chance to
              innovate and strengthen your resolve for success.
            </p>
            <div className="bg-white border-l-4 border-indigo-500 p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
                Keys to Success:
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                <li className="mb-2">
                  Resilience: Bounce back from failures and keep going
                </li>
                <li className="mb-2">
                  Consistency: Stay committed to your goals
                </li>
                <li className="mb-2">
                  Creativity: Find new paths when faced with challenges
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="bg-gradient-to-r from-indigo-100 to-indigo-200 text-center rounded-xl py-12 px-6 lg:px-16 shadow-xl mt-16">
          <h2 className="text-4xl font-extrabold text-indigo-800 mb-4">
            Join the Competitive Edge Movement!
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 mb-6">
            Start your journey today. Compete, grow, and achieve your dreams in
            a world full of opportunities.
          </p>
          <Link
            to="/signup"
            className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:bg-indigo-700"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BuildCompetitiveness;
