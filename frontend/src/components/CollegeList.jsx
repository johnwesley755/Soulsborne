import React from "react";
import StartupTitle from "./StartupCard";

const CollegeList = ({ colleges }) => {
  return (
    <div className="grid gap-8 mt-8">
      {colleges.map((college, index) => (
        <div
          key={index}
          className="bg-gradient-to-tl from-indigo-900 to-purple-900 rounded-lg p-6 shadow-md"
        >
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {college.collegeName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-bold">
            {college.startups.map((startup, idx) => (
              <StartupTitle
                key={idx}
                name={startup.name}
                description={startup.description}
                image={startup.image}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollegeList;
