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
    // Add subscription logic here
    alert(`Subscribed with: ${email}`);
    setEmail(""); // Clear the email input after subscription
  };

  return (
    <section className="py-20 bg-gray-10">
      <div className="max_padd_container text-center">
        <h2 className="text-5xl font-bold mb-6 text-tertiary">
          Stay Updated with Market & Company Events
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          Never miss important updates and insights. Stay ahead of the curve
          with the latest news.
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <FaCalendarAlt className="text-4xl text-secondary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
            <p className="text-gray-600">
              Get notified about webinars, conferences, and networking events
              happening soon.
            </p>
            <ul className="mt-2 text-left">
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
          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <FaBullhorn className="text-4xl text-secondary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Latest News</h3>
            <p className="text-gray-600">
              Stay informed with the latest updates from the market and your
              favorite companies.
            </p>
            <ul className="mt-2 text-left">
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
          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <FaChartLine className="text-4xl text-secondary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Market Insights</h3>
            <p className="text-gray-600">
              Access detailed reports and analyses to help you make informed
              decisions.
            </p>
            <ul className="mt-2 text-left">
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

        {/* Subscription Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-tertiary">
            Subscribe for Updates
          </h3>
          <p className="text-gray-600 mb-4">
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
              className="btn_secondary_rounded flexCenter px-6 py-2 text-white bg-secondary hover:bg-secondary-dark transition duration-300 rounded-lg"
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
