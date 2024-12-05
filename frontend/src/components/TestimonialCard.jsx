// src/components/TestimonialCard.jsx
import React from "react";

const TestimonialCard = ({ testimonial }) => {
  // Ensure the testimonial prop is defined and contains the required data
  if (!testimonial) {
    return <div>Loading...</div>; // Show loading if no testimonial is passed
  }

  const { avatar, testimonialText, name, role } = testimonial;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-80">
      <img
        src={avatar || "/default-avatar.jpg"} // Fallback to a default avatar if the avatar is missing
        alt={`${name}'s Avatar`}
        className="w-16 h-16 rounded-full mb-4 mx-auto"
      />
      <p className="text-gray-600 italic">"{testimonialText}"</p>
      <p className="text-gray-800 font-semibold mt-4">{name}</p>
      <p className="text-gray-500">{role}</p>
    </div>
  );
};

export default TestimonialCard;
