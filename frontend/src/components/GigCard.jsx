import React from "react";
import { Link } from "react-router-dom";

const GigCard = ({ gig }) => (
  <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <img
      src={gig.image}
      alt={gig.title}
      className="w-full h-40 object-cover rounded-md mb-4"
    />
    <h3 className="text-xl font-semibold">{gig.title}</h3>
    <p className="text-gray-500">{gig.description}</p>
    <Link to={`/gig/${gig.id}`} className="text-blue-500 mt-4 inline-block">
      View Details
    </Link>
  </div>
);

export default GigCard;
