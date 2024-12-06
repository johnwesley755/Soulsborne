// src/pages/StartupPage.jsx

import React, { useState } from "react";
import StartupCard from "../components/StartupCard";
import { data } from "../services/data"; // Ensure this is correctly imported from data.js
import SearchBar from "../components/SearchBar"; // Import the SearchBar component

const StartupPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the startups based on the search query
  const filteredStartups = data
    .map((college) => ({
      ...college,
      startups: college.startups.filter((startup) =>
        startup.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((college) => college.startups.length > 0); // Only show colleges with matching startups

  return (
    <div className="mt-20 p-8 bg-gradient-to-r from-indigo-900 to-purple-900 min-h-screen">
      <h1 className="text-5xl font-extrabold text-white mb-8 text-center tracking-wide">
        Discover Exciting Startups
      </h1>

      {/* Description Text Below the Heading */}
      <p className="text-lg mb-12 text-white text-center font-semibold max-w-3xl mx-auto">
        Explore a collection of innovative startups from top colleges. These
        startups are pushing the boundaries of technology, sustainability, and
        creativity, making a mark in industries ranging from tech to healthcare
        and beyond. Find out more about the groundbreaking work being done by
        passionate entrepreneurs.
      </p>

      {/* Search Bar Component */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

      {filteredStartups.map((college, index) => (
        <div key={index} className="college-section mb-12">
          <h2 className="text-4xl font-bold text-white mt-12 mb-6">
            {college.collegeName}
          </h2>

          <div className="startups grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {college.startups.map((startup) => (
              <StartupCard key={startup.id} startup={startup} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StartupPage;
