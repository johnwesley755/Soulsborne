import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserFriends, FaComments, FaUsers } from "react-icons/fa";

const Connect = () => {
  return (
    <section className="py-20 bg-gray-10">
      <div className="max_padd_container text-center">
        <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-tertiary">
          Connect with Like-Minded People
        </h2>
        <p className="text-lg lg:2xl  text-gray-700 mb-10">
          Join a community where you can share ideas, collaborate on projects,
          and grow together.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 cursor-pointer">
            <FaUserFriends className="text-4xl text-secondary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Network</h3>
            <p className="text-gray-600">
              Connect with fellow students and professionals who share your
              interests.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 cursor-pointer">
            <FaComments className="text-4xl text-secondary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Collaborate</h3>
            <p className="text-gray-600">
              Work on projects together and exchange valuable insights and
              feedback.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 cursor-pointer">
            <FaUsers className="text-4xl text-secondary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Join Events</h3>
            <p className="text-gray-600">
              Participate in workshops, webinars, and community events to
              enhance your skills.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <NavLink
            to="/community"
            className="btn_secondary_rounded font-bold px-7 py-3 rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl"
          >
            Join our Community
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Connect;
