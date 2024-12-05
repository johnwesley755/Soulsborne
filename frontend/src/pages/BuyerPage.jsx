import React from "react";
import GigCard from "../components/GigCard";

const BuyerPage = () => {
  const gigs = [
    {
      id: 1,
      title: "Web Development",
      description: "Build a responsive website",
      image: "/assets/gig1.jpg",
    },
    {
      id: 2,
      title: "Graphic Design",
      description: "Create logos and branding",
      image: "/assets/gig1.jpg",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">Browse Gigs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gigs.map((gig) => (
          <GigCard key={gig.id} gig={gig} />
        ))}
      </div>
    </div>
  );
};

export default BuyerPage;
