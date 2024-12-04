// Pagination.jsx
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center py-10">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-6 py-3 bg-violet-600 text-white rounded-lg mr-2 hover:bg-violet-700 disabled:bg-gray-300"
      >
        Prev
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-3 bg-white text-violet-600 border border-violet-600 rounded-lg mx-1 ${
            page === currentPage
              ? "bg-violet-600 text-white"
              : "hover:bg-violet-200"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-6 py-3 bg-violet-600 text-white rounded-lg ml-2 hover:bg-violet-700 disabled:bg-gray-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
