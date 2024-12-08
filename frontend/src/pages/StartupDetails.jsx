import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../services/data";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"; // Icons for social links

const StartupDetails = () => {
  const { id } = useParams();
  const startup = data
    .flatMap((college) => college.startups)
    .find((startup) => startup.id === parseInt(id));

  if (!startup) {
    return <div className="text-center text-xl">Startup not found.</div>;
  }

  return (
    <div className="startup-details min-h-screen mt-20 bg-gray-100 p-8">
      {/* Hero Image and Startup Name */}
      <div
        className="hero-section w-full bg-cover bg-center rounded-xl h-96 mb-12"
        style={{ backgroundImage: `url(${startup.image})` }}
      >
        <div className="overlay w-full h-full bg-black opacity-40 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white">{startup.name}</h1>
        </div>
      </div>

      {/* Startup Info */}
      <div className="startup-info flex flex-col lg:flex-row items-center lg:space-x-12 p-8 bg-white rounded-xl shadow-xl mb-12">
        <div className="startup-tagline w-full lg:w-2/3 text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            {startup.tagline}
          </h2>
          <div className="status bg-green-600 text-white font-semibold px-6 py-2 rounded-full inline-block mb-4">
            ACTIVE
          </div>
          <p className="text-lg text-gray-700 font-bold mb-4">{startup.description}</p>
          <div className="social-links mt-6 flex justify-center lg:justify-start">
            <a
              href={`https://www.linkedin.com/in/${startup.founder.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 text-3xl text-blue-600 hover:text-blue-800"
            >
              <FaLinkedin />
            </a>
            <a
              href={`https://twitter.com/${startup.founder.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 text-3xl text-blue-400 hover:text-blue-600"
            >
              <FaTwitter />
            </a>
            <a
              href={`mailto:${startup.founder.contact}`}
              className="mx-4 text-3xl text-gray-600 hover:text-gray-800"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Founder Image and Details */}
        <div className="founder-info mt-6 lg:mt-0 w-full lg:w-1/3 text-center lg:text-left">
          {/* Random Image for Founder */}
          <img
            src={`https://randomuser.me/api/portraits/men/${Math.floor(
              Math.random() * 100
            )}.jpg`}
            alt={startup.founder.name}
            className="rounded-full w-40 h-40 object-cover mx-auto lg:mx-0 border-4 border-gray-300"
          />
          <h3 className="mt-4 text-xl font-bold text-gray-800">
            {startup.founder.name}
          </h3>
          <p className="text-lg font-bold text-gray-600">{startup.founder.position}</p>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews mb-12">
        <h3 className="text-3xl font-extrabold text-gray-800 mb-6">Reviews</h3>
        <div className="review-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {startup.reviews.map((review, index) => (
            <div
              key={index}
              className="review p-6 bg-white rounded-xl shadow-lg border-t-4 border-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-105"
              style={{ maxWidth: "350px" }} // Reduce width of cards
            >
              <div className="reviewer-info flex justify-between items-center mb-4">
                <p className="font-bold text-lg text-gray-800">
                  {review.reviewer}
                </p>
                <p className="text-sm font-bold text-gray-500">{review.date}</p>
              </div>
              <p className="text-gray-700 font-bold">{review.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact text-center">
        <button className="bg-gradient-to-r from-indigo-900 to-purple-900 py-3 px-12 rounded-full text-lg font-bold text-white hover:bg-blue-500 transition duration-300 transform hover:scale-105">
          Contact the Founder
        </button>
      </div>
    </div>
  );
};

export default StartupDetails;
