import React from "react";
import { useParams } from "react-router-dom"; // To get the dynamic startup ID
import { data } from "../services/data"; // Import the data from the services folder

const StartupDetails = () => {
  const { id } = useParams(); // Get the startup id from the URL
  const startup = data
    .flatMap((college) => college.startups)
    .find((startup) => startup.id === parseInt(id)); // Find the startup by id

  if (!startup) {
    return <div className="text-center text-xl">Startup not found.</div>; // Handle if no startup is found
  }

  return (
    <div className="startup-details min-h-screen bg-gray-100 p-8">
      {/* Header Section with profile picture */}
      <div className="header bg-white shadow-lg rounded-lg p-8 mb-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Startup Image */}
          <div className="image-container w-full lg:w-1/4 mb-6 lg:mb-0">
            <img
              src={startup.image} // Ensure this points to the correct image URL
              alt={startup.name}
              className="w-40 h-40 object-cover rounded-full border-4 border-blue-500"
            />
          </div>

          {/* Startup Info */}
          <div className="info w-full lg:w-3/4 pl-0 lg:pl-12 text-center lg:text-left">
            <h1 className="text-4xl font-semibold text-gray-800 mb-2">
              {startup.name}
            </h1>
            <p className="text-lg text-gray-500 mb-4">{startup.tagline}</p>
            <div className="status bg-green-500 text-white font-semibold px-4 py-2 rounded-full inline-block mb-4">
              Active
            </div>
            <div className="social-links mt-6 flex justify-center lg:justify-start">
              <a
                href={`https://www.linkedin.com/in/${startup.founder.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 text-xl text-blue-600 hover:text-blue-800"
              >
                LinkedIn
              </a>
              <a
                href={`https://twitter.com/${startup.founder.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 text-xl text-blue-400 hover:text-blue-600"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Startup Description */}
      <div className="description mb-12 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          About the Startup
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          {startup.description}
        </p>
      </div>

      {/* Founder Details Section */}
      <div className="founder-details bg-white p-8 rounded-lg shadow-lg mb-12">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
          Founder Details
        </h3>
        <div className="text-gray-600 space-y-4">
          <p>
            <strong className="font-medium">Name:</strong>{" "}
            {startup.founder.name}
          </p>
          <p>
            <strong className="font-medium">Position:</strong>{" "}
            {startup.founder.position}
          </p>
          <p>
            <strong className="font-medium">Contact:</strong>{" "}
            {startup.founder.contact}
          </p>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews mb-12">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">Reviews</h3>
        <div className="review-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {startup.reviews.map((review, index) => (
            <div
              key={index}
              className="review p-6 bg-white rounded-lg shadow-md border border-gray-200"
            >
              <div className="reviewer-info flex justify-between items-center mb-4">
                <p className="font-semibold text-lg">{review.reviewer}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact text-center">
        <button className="bg-gradient-to-r from-green-400 to-blue-500 py-3 px-10 rounded-full text-lg font-semibold text-white hover:bg-blue-500 transition duration-300">
          Contact the Founder
        </button>
      </div>
    </div>
  );
};

export default StartupDetails;
