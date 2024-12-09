import React from "react";
import { Link } from "react-router-dom";

const FocusAndKillProcrastination = () => {
  return (
    <section className="py-20 px-6 lg:px-32 bg-gradient-to-tl from-indigo-900 to-purple-900">
      <div className="max-w-7xl mx-auto text-center mb-12">
        {/* Headline Section */}
        <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6">
          Focus and Kill Procrastination
        </h1>
        <p className="text-lg lg:text-xl font-semibold text-white">
          Discover practical steps to eliminate distractions, stay accountable,
          and unlock your full potential.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Section 1 */}
        <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1674489620667-eaf4a0094996?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Motivation"
            className="w-full object-cover h-64"
          />
          <div className="p-8 bg-[#f0f0ff] text-purple-900">
            <h2 className="text-3xl font-bold mb-4">Let's Get Focused</h2>
            <p className="text-lg lg:text-xl mb-6">
              Kill procrastination and unlock your potential. Take the first
              step towards achieving your goals today!
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Productivity"
            className="w-full object-cover h-64"
          />
          <div className="p-8 bg-[#f0f0ff] text-purple-900">
            <h2 className="text-3xl font-bold mb-4">Set Clear Goals</h2>
            <p className="text-lg lg:text-xl mb-6">
              Define your objectives and break them into manageable tasks.
              Clarity is key to success!
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Success"
            className="w-full object-cover h-64"
          />
          <div className="p-8 bg-[#f0f0ff] text-purple-900">
            <h2 className="text-3xl font-bold mb-4">Eliminate Distractions</h2>
            <p className="text-lg lg:text-xl mb-6">
              Create a focused environment by reducing interruptions. Your
              productivity will soar!
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1681505195930-388c317b7a76?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Stay Accountable"
            className="w-full object-cover h-64"
          />
          <div className="p-8 bg-[#f0f0ff] text-purple-900">
            <h2 className="text-3xl font-bold mb-4">Stay Accountable</h2>
            <p className="text-lg lg:text-xl mb-6">
              Share your goals with a friend or use apps to track your progress.
              Stay motivated!
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex justify-center mt-16">
        <Link
          to="/signup"
          className="bg-white text-purple-600 hover:border-purple-500 font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl"
        >
          Get Started Now
        </Link>
      </div>
    </section>
  );
};

export default FocusAndKillProcrastination;
