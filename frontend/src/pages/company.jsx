import React, { useState } from "react";
import { motion } from "framer-motion";
import taskImage1 from "../assets/task1.svg";
import gaajukoo from "../assets/gaajukoo.png";
import taskImage3 from "../assets/task3.svg";
import john from "../assets/john-wesley.png";



// Sample tasks data
const tasks = [
  {
    id: 1,
    title: "Santhosh",
    description: "Founder & CEO",
    image: taskImage1,
  },
  {
    id: 2,
    title: "Raghul",
    description: "Technical Architect",
    image: gaajukoo,
  },
  {
    id: 3,
    title: "John Wesley",
    description: "Full Stack Developer",
    image: john,
  },
  {
    id: 4,
    title: "Krithik Srinivas",
    description: "Security Architect",
    image: taskImage3,
  }
];

const Company = () => {

  return (
    <section className="relative min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 pt-16 pb-20 mt-20">
      <div className="max_padd_container z-10 relative flex flex-col gap-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-6xl font-bold text-white mb-4">
            Meet the Creators
          </h1>
        </div>

        {/* Task Cards Section */}
        <div className="flex flex-col gap-12">
          {tasks.map((task, index) => (
            <motion.div
              key={task.id}
              className={`flex flex-col lg:flex-row items-center ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              } justify-between gap-8`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              {/* Task Card */}
              <div className="flex-1 bg-white p-8 rounded-lg shadow-lg text-black">
                {/* Task Content */}
                <h2 className="text-4xl font-bold mb-4">{task.title}</h2>
                <p className="text-xl mb-6">{task.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Company;
