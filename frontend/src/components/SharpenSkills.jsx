import React from "react";
import { Link } from "react-router-dom";

// Replace these image links with URLs from Unsplash or Pexels
const skillImages = [
  "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Web Development
  "https://th.bing.com/th/id/OIP.F0Naw1NB10YoTCBTdrEUQgHaEv?rs=1&pid=ImgDetMain", // Graphic Design
  "https://th.bing.com/th/id/OIP.gBYKYSNWxZ8HBGxxC-iSFAHaDj?w=298&h=168&c=7&r=0&o=5&dpr=1.1&pid=1.7", // Digital Marketing
  "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Data Science
  "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Cybersecurity
  "https://plus.unsplash.com/premium_photo-1706259481452-f857c96ceaca?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Project Management
];


const skills = [
  {
    title: "Web Development",
    description:
      "Learn to build stunning websites and applications using HTML, CSS, JavaScript, and frameworks like React.",
    imgSrc: skillImages[0],
  },
  {
    title: "Graphic Design",
    description:
      "Master design tools like Adobe Photoshop, Illustrator, and Figma to create breathtaking visuals.",
    imgSrc: skillImages[1],
  },
  {
    title: "Digital Marketing",
    description:
      "Explore SEO, social media marketing, and PPC campaigns to dominate the online world.",
    imgSrc: skillImages[2],
  },
  {
    title: "Data Science",
    description:
      "Analyze, visualize, and interpret data using Python, R, and machine learning frameworks.",
    imgSrc: skillImages[3],
  },
  {
    title: "Cybersecurity",
    description:
      "Learn ethical hacking, network defense, and threat analysis to safeguard digital environments.",
    imgSrc: skillImages[4],
  },
  {
    title: "Project Management",
    description:
      "Plan and execute projects efficiently using Agile, Scrum, and tools like Trello and Jira.",
    imgSrc: skillImages[5],
  },
];

const SharpenSkills = () => {
  return (
    <section className="bg-gradient-to-tl from-indigo-900 to-purple-900 py-20 px-6 lg:px-20 text-white">
      {/* Component container */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Header Section */}
        <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-8">
          Sharpen Your Skills Anytime, Anywhere
        </h2>
        <p className="text-lg lg:text-xl font-bold text-gray-200 mb-12">
          Upskill and reskill with our diverse range of courses. Build your
          expertise in tech, design, marketing, and more.
        </p>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
            >
              <img
                src={skill.imgSrc}
                alt={skill.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-black mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-700 font-semibold">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <Link
          to="/courses"
          className="bg-white text-indigo-600 hover:text-indigo-800 font-bold py-4 px-8 rounded-full shadow-xl transition-transform duration-300 hover:scale-110"
        >
          Start Learning Now
        </Link>
      </div>
    </section>
  );
};

export default SharpenSkills;
