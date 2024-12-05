import React from "react";

const GigDetailsPage = () => {
  const gig = {
    title: "Web Development",
    description: "Build a responsive website with modern technologies.",
    requirements: "HTML, CSS, JavaScript, React",
    price: "$500",
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold">{gig.title}</h1>
      <p className="text-gray-500 mb-4">{gig.description}</p>
      <h3 className="text-xl font-semibold">Requirements</h3>
      <p className="text-gray-700 mb-4">{gig.requirements}</p>
      <h3 className="text-xl font-semibold">Price</h3>
      <p className="text-green-500 text-lg">{gig.price}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600">
        Buy Now
      </button>
    </div>
  );
};

export default GigDetailsPage;
