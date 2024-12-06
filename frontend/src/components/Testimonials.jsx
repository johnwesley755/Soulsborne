import React from "react";
import { motion } from "framer-motion";

// Sample testimonials with user images
const testimonials = [
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "This platform helped me connect with incredible freelancers. Highly recommended!",
  },
  {
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "Fantastic experience! I found exactly what I was looking for, thanks to this platform.",
  },
  {
    name: "Michael Brown",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "A great place to find high-quality talent! Fast, efficient, and reliable.",
  },
  {
    name: "Emily White",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    text: "The best freelance platform I've ever used. I highly recommend it to others.",
  },
  {
    name: "Chris Green",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    text: "Top-notch service and a fantastic community of freelancers!",
  },
  {
    name: "Sarah Lee",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    text: "Amazing platform for connecting with talented professionals. Easy to use!",
  },
  {
    name: "David Wilson",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    text: "I’ve posted multiple jobs here, and the quality of candidates is always excellent.",
  },
  {
    name: "Laura Martin",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    text: "The best platform for hiring freelancers with great communication and results.",
  },
  {
    name: "Daniel Clark",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    text: "I’m amazed by the quality and professionalism of the freelancers here. Will use again!",
  },
  {
    name: "Sophia Miller",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    text: "Quick, professional, and hassle-free! Found exactly what I needed in no time.",
  },
];

const Testimonials = () => {
  // Create a helper function to render the star rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-${index < rating ? "yellow" : "gray"}-400`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold text-gray-700 text-center mb-6">
        Testimonials
      </h2>

      <div className="overflow-hidden">
        {/* Testimonials Slider */}
        <motion.div
          className="flex space-x-6 animate-marquee"
          initial={{ x: 0 }}
          animate={{ x: `-100%` }}
          transition={{
            repeat: Infinity,
            duration: 15, // Adjust speed of the slide
            ease: "linear",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-12 rounded-lg shadow-lg w-80 h-60 flex-shrink-0 transform transition-transform hover:scale-105"
            >
              <div className="flex flex-col items-center space-y-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
                />
                <p className="italic text-gray-600 text-center">
                  "{testimonial.text}"
                </p>
                <div className="mt-4 flex justify-between items-center w-full">
                  <p className="font-bold text-gray-700 text-center">
                    {testimonial.name}
                  </p>
                  <div className="text-yellow-400">
                    {renderStars(5)}{" "}
                    {/* Assuming 5-star rating for simplicity */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
