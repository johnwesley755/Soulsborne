import React from "react";
import { FaCalendarAlt, FaLocationArrow } from "react-icons/fa"; // Optional: For icons

const EventCard = ({ event }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full">
      {/* Event Image */}
      <img
        src={event.imageUrl} // Dynamic image based on event data
        alt={event.title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />

      {/* Event Title */}
      <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>

      {/* Event Details */}
      <div className="flex items-center text-gray-700 mt-2">
        <FaCalendarAlt className="mr-2" />
        <p className="text-sm font-bold">{event.date}</p>
        <span className="mx-2">|</span>
        <FaLocationArrow className="mr-2" />
        <p className="text-sm font-bold">{event.location}</p>
      </div>

      {/* Event Description */}
      <p className="text-gray-600 mt-4 text-sm flex-grow">
        {event.description}
      </p>

      {/* Event Badge (Event Type) */}
      <div className="mt-4">
        <span className="bg-indigo-700 text-white py-1 px-3 rounded-full text-xs font-semibold">
          {event.type}{" "}
        </span>
      </div>

      {/* RSVP Button */}
      <div className="mt-6 text-center">
        <button className="bg-indigo-700 text-white py-2 px-6 rounded-lg hover:bg-indigo-600 hover:scale-105 transition duration-300">
          RSVP Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;
