import React from "react";
import { Link } from "react-router-dom";
import competitionImage from "../assets/competition-illustration.svg"; // Replace with your own illustration
import growthImage from "../assets/growth-illustration.svg"; // Additional illustration
import challengeImage from "../assets/challenge-illustration.svg"; // Another illustration

const BuildCompetitiveness = () => {
  return (
    <section className="py-20 px-6 lg:px-32 bg-gray-10">
      <div className="max-w-7xl mx-auto">
        {/* Headline Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-4">
            Build Your Competitiveness
          </h1>
          <p className="text-lg lg:text-xl text-gray-600">
            Unleash your potential and rise to the top. The arena of competition
            is where your skills and perseverance will be tested, and this
            journey will drive your success.
          </p>
        </div>

        {/* Section 1: Overview */}
        <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg mb-12">
          <img
            src={competitionImage}
            alt="Competition"
            className="w-full lg:w-1/2 p-6 object-contain rounded-l-lg"
          />
          <div className="p-10 lg:p-16 text-left bg-[#f8f9fa] text-[#6C63FF] rounded-r-lg flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">
              Enter the Arena of Competition
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 mb-6">
              Challenge yourself and stay ahead of the curve. The competition in
              today's world is fierce, but through continuous improvement and
              learning, you can sharpen your edge and stand out.
            </p>
          </div>
        </div>

        {/* Section 2: How Competitiveness Builds Growth */}
        <div className="flex flex-col lg:flex-row-reverse items-center bg-white shadow-lg rounded-lg mb-12">
          <img
            src={growthImage}
            alt="Growth"
            className="w-full lg:w-1/2 p-6 object-contain rounded-r-lg"
          />
          <div className="p-10 lg:p-16 bg-white text-[#6C63FF] rounded-l-lg flex flex-col justify-center border-l-4 border-[#6C63FF]">
            <h2 className="text-4xl font-bold mb-4">
              Growth through Competition
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 mb-6">
              Competition pushes you to expand your skills, rethink your
              strategies, and build resilience. Each challenge offers an
              opportunity to grow stronger and more capable.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-3">
                Develop new skills and hone existing ones
              </li>
              <li className="mb-3">Enhance your problem-solving abilities</li>
              <li className="mb-3">
                Adapt to fast-paced environments and innovate
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3: Overcoming Challenges */}
        <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg mb-12">
          <img
            src={challengeImage}
            alt="Challenge"
            className="w-full lg:w-1/2 p-6 object-contain rounded-l-lg"
          />
          <div className="p-10 lg:p-16 bg-[#f8f9fa] text-[#6C63FF] rounded-r-lg flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">Overcoming Challenges</h2>
            <p className="text-lg lg:text-xl text-gray-700 mb-6">
              The path to success isn't easy, but it’s the obstacles that make
              the journey worthwhile. Face each challenge with confidence, and
              use setbacks as stepping stones towards your goals.
            </p>
            <div className="bg-white border-l-4 border-[#6C63FF] p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">
                Keys to Overcoming Challenges:
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li className="mb-2">
                  Resilience: Bounce back from failures and keep moving forward
                </li>
                <li className="mb-2">
                  Consistency: Stay focused and committed to your objectives
                </li>
                <li className="mb-2">
                  Innovation: Find creative solutions to overcome barriers
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4: Call to Action */}
        <div className="bg-[#f0f0ff] text-black py-10 px-6 lg:px-16 rounded-lg text-center shadow-lg mt-16">
          <h2 className="text-4xl font-bold mb-4">
            Join the Competitive Arena Today!
          </h2>
          <p className="text-lg lg:text-xl mb-6">
            Your journey to success starts now. Embrace the competition, build
            your strengths, and rise to the top.
          </p>
          <Link
            to="/"
            className="bg-white text-[#6C63FF] font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:bg-gray-100"
          >
            Start Competing Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BuildCompetitiveness;
