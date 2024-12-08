import React, { useState } from "react";

const JobPost = () => {
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    skills: "",
    budget: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Posted: ", jobData);
    // Add code here to send the job data to a database (e.g., Firebase or API)
    alert("Job posted successfully!");
    setJobData({
      title: "",
      description: "",
      skills: "",
      budget: "",
      deadline: "",
    });
  };

  return (
    <div className="bg-gradient-to-tl from-purple-900 to-indigo-900 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Post a Job</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Job Title */}
          <div>
            <label htmlFor="title" className="block font-semibold mb-1">
              Job Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={jobData.title}
              onChange={handleChange}
              placeholder="Enter job title"
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-violet-500 focus:outline-none"
            />
          </div>

          {/* Job Description */}
          <div>
            <label htmlFor="description" className="block font-semibold mb-1">
              Job Description
            </label>
            <textarea
              id="description"
              name="description"
              value={jobData.description}
              onChange={handleChange}
              placeholder="Describe the job"
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-violet-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Skills Required */}
          <div>
            <label htmlFor="skills" className="block font-semibold mb-1">
              Skills Required
            </label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={jobData.skills}
              onChange={handleChange}
              placeholder="E.g., JavaScript, React"
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-violet-500 focus:outline-none"
            />
          </div>

          {/* Budget */}
          <div>
            <label htmlFor="budget" className="block font-semibold mb-1">
              Budget ($)
            </label>
            <input
              type="number"
              id="budget"
              name="budget"
              value={jobData.budget}
              onChange={handleChange}
              placeholder="Enter budget"
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-violet-500 focus:outline-none"
            />
          </div>

          {/* Deadline */}
          <div>
            <label htmlFor="deadline" className="block font-semibold mb-1">
              Deadline
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={jobData.deadline}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-violet-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-violet-600 text-white py-2 px-4 rounded-md hover:bg-violet-700 focus:ring-2 focus:ring-violet-500"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobPost;
