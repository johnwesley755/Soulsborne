import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaBullhorn,
  FaChartLine,
  FaEnvelope,
} from "react-icons/fa";

const StayUpdated = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max_padd_container text-center">
        <h2 className="text-6xl font-extrabold mb-6 text-tertiary">
          Stay Updated with Market & Company Events
        </h2>
        <p className="text-lg text-gray-700 font-bold mb-10">
          Never miss important updates and insights. Stay ahead of the curve
          with the latest news.
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Card 1: Upcoming Events */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Upcoming Events"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <FaCalendarAlt className="text-4xl text-purple-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">Upcoming Events</h3>
              <p className="text-gray-600 font-semibold">
                Get notified about webinars, conferences, and networking events
                happening soon.
              </p>
              <ul className="mt-2 font-semibold text-left">
                <li className="text-gray-500">
                  🔹 Webinar: Market Trends - Jan 10
                </li>
                <li className="text-gray-500">
                  🔹 Conference: Tech Innovations - Feb 15
                </li>
                <li className="text-gray-500">
                  🔹 Networking: Connect & Collaborate - Mar 5
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Latest News */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Latest News"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <FaBullhorn className="text-4xl text-purple-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">Latest News</h3>
              <p className="text-gray-600 font-semibold">
                Stay informed with the latest updates from the market and your
                favorite companies.
              </p>
              <ul className="mt-2 text-left font-semibold">
                <li className="text-gray-500">
                  🔹 Company XYZ Acquires ABC Inc.
                </li>
                <li className="text-gray-500">
                  🔹 New Product Launch: Smart Gadget 2.0
                </li>
                <li className="text-gray-500">
                  🔹 CEO Announcement: Strategic Changes Ahead
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Market Insights */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
            <img
              src="https://plus.unsplash.com/premium_photo-1665203678107-839a722d355f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Market Insights"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <FaChartLine className="text-4xl text-purple-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Market Insights</h3>
              <p className="text-gray-600 font-semibold">
                Access detailed reports and analyses to help you make informed
                decisions.
              </p>
              <ul className="mt-2 text-left font-semibold">
                <li className="text-gray-500">
                  🔹 Q4 Earnings Report: Key Takeaways
                </li>
                <li className="text-gray-500">
                  🔹 Market Analysis: 2024 Predictions
                </li>
                <li className="text-gray-500">
                  🔹 Investment Tips: Top 5 Stocks to Watch
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Subscription Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto cursor-pointer">
          <h3 className="text-2xl font-bold mb-4 text-tertiary">
            Subscribe for Updates
          </h3>
          <p className="text-gray-600 mb-4 font-semibold">
            Enter your email to receive the latest news and updates directly to
            your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="border rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button
              type="submit"
              className="btn_secondary_rounded flexCenter px-6 py-2 text-white bg-purple-500 hover:bg-secondary-dark transition duration-300 rounded-lg"
            >
              Subscribe <FaEnvelope className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default StayUpdated;
