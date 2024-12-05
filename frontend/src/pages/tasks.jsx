import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

// Sample streak data for two weeks (0 - not completed, 1 - completed)
const weeklyStreaks = [
  [1, 1, 0, 1, 0, 1, 1], // Previous week
  [1, 0, 1, 0, 0, 0, 0], // Current week
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
    image:
      "https://d3mxt5v3yxgcsr.cloudfront.net/courses/17147/course_17147_image.jpg",
  },
  {
    id: 2,
    title: "Task 2: JavaScript Fundamentals",
    description: "Get started with JavaScript programming.",
    progress: 80,
    image:
      "https://cyberhoot.com/wp-content/uploads/2020/07/Free-Courses-to-learn-JavaScript.jpg",
  },
  {
    id: 3,
    title: "Task 3: React Basics",
    description: "Learn how to build UI with React.",
    progress: 60,
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png",
  },
];

const TaskCard = ({ task, navigateToCourses }) => (
  <motion.div
    className={`flex flex-col lg:flex-row items-center ${
      task.id % 2 === 0 ? "lg:flex-row-reverse" : ""
    } justify-between gap-8`}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: task.id * 0.3 }}
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

    {/* Task Details */}
    <div className="flex-1 bg-white p-8 rounded-lg shadow-lg text-black">
      <h2 className="text-4xl font-bold mb-4">{task.title}</h2>
      <p className="text-xl mb-6 font-bold">{task.description}</p>
      <div className="w-full bg-gray-300 h-6 rounded-full overflow-hidden mb-4">
        <div
          className="bg-gradient-to-r from-green-400 to-blue-500 h-full"
          style={{ width: `${task.progress}%` }}
        ></div>
      </div>
      <p className="text-lg font-bold">{task.progress}% Completed</p>
      <button
        onClick={navigateToCourses}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 font-semibold"
      >
        Learn Now
      </button>
    </div>
  </motion.div>
);

const StreakSection = ({
  weeklyStreaks,
  currentWeek,
  handlePreviousWeek,
  handleNextWeek,
}) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center mt-12">
    <h2 className="text-4xl font-bold mb-4">Daily Streak</h2>
    <p className="text-lg mb-6">Keep up your streak! Here's your progress:</p>
    <div className="flex flex-wrap justify-center gap-6 items-center mb-4">
      {weeklyStreaks[currentWeek].map((streak, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center min-w-0"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-4xl sm:text-5xl">
            {streak === 1 ? emojis.completed : emojis.pending}
          </span>
          <p className="mt-2 text-lg sm:text-xl font-semibold">
            {daysOfWeek[index]}
          </p>
        </motion.div>
      ))}
    </div>
    <p className="text-lg font-bold mb-4">
      {weeklyStreaks[currentWeek].filter((streak) => streak === 1).length} / 7
      days completed
    </p>
    <div className="flex justify-center gap-4">
      <button
        className="btn_secondary_rounded px-4 py-2 rounded-lg disabled:opacity-50"
        onClick={handlePreviousWeek}
        disabled={currentWeek === 0}
      >
        Previous Week
      </button>
      <button
        className="btn_secondary_rounded text-white px-4 py-2 rounded-lg disabled:opacity-50"
        onClick={handleNextWeek}
        disabled={currentWeek === weeklyStreaks.length - 1}
      >
        Next Week
      </button>
    </div>
  </div>
);

const Tasks = () => {
  const [currentWeek, setCurrentWeek] = useState(1); // Start with current week
  const navigate = useNavigate(); // Initialize navigate

  const handlePreviousWeek = () => {
    if (currentWeek > 0) setCurrentWeek(currentWeek - 1);
  };

  const handleNextWeek = () => {
    if (currentWeek < weeklyStreaks.length - 1) setCurrentWeek(currentWeek + 1);
  };

  // Navigate to courses page
  const navigateToCourses = () => {
    navigate("/courses");
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-tl from-indigo-900 to-purple-900 pt-16 pb-20 mt-20">
      <div className="max_padd_container z-10 relative flex flex-col gap-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-6xl font-extrabold text-white mb-4">
            Task Progress Pathway
          </h1>
          <p className="text-white text-xl font-bold">
            Complete tasks and maintain your daily streak.
          </p>
        </div>

        {/* Task Cards */}
        <div className="flex flex-col gap-12">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              navigateToCourses={navigateToCourses}
            />
          ))}
        </div>

        {/* Streak Section */}
        <StreakSection
          weeklyStreaks={weeklyStreaks}
          currentWeek={currentWeek}
          handlePreviousWeek={handlePreviousWeek}
          handleNextWeek={handleNextWeek}
        />
      </div>
    </section>
  );
};

export default Tasks;
