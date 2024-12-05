import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserFriends, FaComments, FaUsers } from "react-icons/fa";

const Connect = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max_padd_container text-center">
        <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 text-tertiary">
          Connect with Like-Minded People
        </h2>
        <p className="text-lg lg:text-xl font-bold text-gray-700 mb-10">
          Join a community where you can share ideas, collaborate on projects,
          and grow together.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Networking"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <FaUserFriends className="text-6xl text-secondary mb-4 mx-auto" />
              <h3 className="text-3xl font-bold mb-2">Network</h3>
              <p className="text-gray-600 font-semibold text-lg">
                Connect with fellow students and professionals who share your
                interests.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Collaboration"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <FaComments className="text-6xl text-secondary mb-4 mx-auto" />
              <h3 className="text-3xl font-bold mb-2">Collaborate</h3>
              <p className="text-gray-600 font-semibold text-lg">
                Work on projects together and exchange valuable insights and
                feedback.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
            <img
              src="https://plus.unsplash.com/premium_photo-1664299935896-8b7638a6f105?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Events"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <FaUsers className="text-6xl text-secondary mb-4 mx-auto" />
              <h3 className="text-3xl font-bold mb-2">Join Events</h3>
              <p className="text-gray-600 font-semibold text-lg">
                Participate in workshops, webinars, and community events to
                enhance your skills.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <NavLink
            to="/community"
            className="btn_secondary_rounded font-bold px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Join our Community
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Connect;
