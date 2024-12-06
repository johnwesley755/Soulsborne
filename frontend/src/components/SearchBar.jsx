import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex justify-center my-6">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-3/4 md:w-1/2 px-4 py-2 rounded-lg border-2 border-gray-500 focus:outline-none focus:border-purple-600 text-gray-800"
        placeholder="Search by college name..."
      />
    </div>
  );
};

export default SearchBar;
