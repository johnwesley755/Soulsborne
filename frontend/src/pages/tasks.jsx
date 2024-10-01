import React, { useState } from "react";
import { motion } from "framer-motion";
import taskImage1 from "../assets/task1.svg";
import taskImage2 from "../assets/task2.svg";
import taskImage3 from "../assets/task3.svg";

// Sample streak data for two weeks (0 - not completed, 1 - completed)
const weeklyStreaks = [
  [1, 1, 0, 1, 0, 1, 1], // Previous week (example data)
  [1, 0, 1, 0, 0, 0, 0], // Current week (example data)
];

// Days of the week
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Emojis for each day based on completion status
const emojis = {
  completed: "🎉",
  pending: "⏳",
};

// Sample tasks data
const tasks = [
  {
    id: 1,
    title: "Task 1: HTML & CSS Basics",
    description: "Learn the fundamentals of HTML & CSS.",
    progress: 100,
    image: taskImage1,
  },
  {
    id: 2,
    title: "Task 2: JavaScript Fundamentals",
    description: "Get started with JavaScript programming.",
    progress: 80,
    image: taskImage2,
  },
  {
    id: 3,
    title: "Task 3: React Basics",
    description: "Learn how to build UI with React.",
    progress: 60,
    image: taskImage3,
  },
];

const Tasks = () => {
  const [currentWeek, setCurrentWeek] = useState(1); // Start with current week

  const handlePreviousWeek = () => {
    if (currentWeek > 0) setCurrentWeek(currentWeek - 1);
  };

  const handleNextWeek = () => {
    if (currentWeek < weeklyStreaks.length - 1) setCurrentWeek(currentWeek + 1);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 pt-16 pb-20 mt-20">
      <div className="max_padd_container z-10 relative flex flex-col gap-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-6xl font-bold text-white mb-4">
            Task Progress Pathway
          </h1>
          <p className="text-white text-xl font-semibold">
            Complete tasks and maintain your daily streak.
          </p>
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
              {/* Task Image */}
              <motion.img
                src={task.image}
                alt={`Task ${task.id} Image`}
                className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg bg-white p-10"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Task Card */}
              <div className="flex-1 bg-white p-8 rounded-lg shadow-lg text-black">
                {/* Task Content */}
                <h2 className="text-4xl font-bold mb-4">{task.title}</h2>
                <p className="text-xl mb-6">{task.description}</p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-300 h-6 rounded-full overflow-hidden mb-4">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-full"
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>

                {/* Progress Text */}
                <p className="text-lg font-semibold">
                  {task.progress}% Completed
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Daily Streak Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center mt-12">
          <h2 className="text-4xl font-bold mb-4">Daily Streak</h2>
          <p className="text-lg mb-6">
            Keep up your streak! Here's your progress for the week:
          </p>

          {/* Display Streak for Current Week */}
          <div className="flex justify-between items-center mb-4">
            {weeklyStreaks[currentWeek].map((streak, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-5xl">
                  {streak === 1 ? emojis.completed : emojis.pending}
                </span>
                <p className="mt-2 text-xl font-semibold">
                  {daysOfWeek[index]}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Progress Status */}
          <p className="text-lg font-semibold mb-4">
            {weeklyStreaks[currentWeek].filter((streak) => streak === 1).length}{" "}
            / 7 days completed
          </p>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
              onClick={handlePreviousWeek}
              disabled={currentWeek === 0}
            >
              Previous Week
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
              onClick={handleNextWeek}
              disabled={currentWeek === weeklyStreaks.length - 1}
            >
              Next Week
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tasks;
