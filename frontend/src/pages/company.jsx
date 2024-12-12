import React from "react";
import { motion } from "framer-motion";

// Sample investors data
const investors = [
  {
    id: 1,
    name: "Sequoia Capital",
    role: "Venture Capitalist",
    image: "https://via.placeholder.com/100",
    description:
      "One of the top venture capital firms, funding startups and technology leaders globally.",
    specialties: ["Tech Startups", "AI/ML", "Fintech", "Healthcare"],
  },
  {
    id: 2,
    name: "Accel",
    role: "Angel Investor",
    image: "https://via.placeholder.com/100",
    description:
      "Early and growth-stage venture capital firm supporting innovative companies.",
    specialties: ["Consumer Internet", "Enterprise Software", "E-commerce"],
  },
  {
    id: 3,
    name: "SoftBank Vision Fund",
    role: "Private Equity Investor",
    image: "https://via.placeholder.com/100",
    description:
      "Global technology investment firm focused on AI-driven businesses.",
    specialties: ["Artificial Intelligence", "E-commerce", "Transportation"],
  },
  {
    id: 4,
    name: "Tiger Global Management",
    role: "Growth Investor",
    image: "https://via.placeholder.com/100",
    description:
      "Focuses on long-term investments in global internet, software, and fintech companies.",
    specialties: ["SaaS", "Fintech", "Cloud Computing", "B2B Solutions"],
  },
  {
    id: 5,
    name: "Andreessen Horowitz (a16z)",
    role: "Venture Capitalist",
    image: "https://via.placeholder.com/100",
    description:
      "Leading venture capital firm investing in software, fintech, and cryptocurrencies.",
    specialties: ["Cryptocurrency", "Blockchain", "SaaS", "AI/ML"],
  },
  {
    id: 6,
    name: "Lightspeed Venture Partners",
    role: "Seed Investor",
    image: "https://via.placeholder.com/100",
    description:
      "Focuses on accelerating startups in various industries like technology and healthcare.",
    specialties: ["Seed Funding", "Healthcare", "AI/ML", "Cybersecurity"],
  },
  {
    id: 7,
    name: "General Catalyst",
    role: "Early-Stage Investor",
    image: "https://via.placeholder.com/100",
    description:
      "Provides early-stage investments to startups with high potential for innovation.",
    specialties: ["Digital Health", "AI/ML", "E-commerce", "SaaS"],
  },
  {
    id: 8,
    name: "Bain Capital Ventures",
    role: "Private Equity Firm",
    image: "https://via.placeholder.com/100",
    description:
      "Investing in pioneering companies in the technology, healthcare, and consumer sectors.",
    specialties: ["Technology", "Consumer Goods", "Healthcare", "SaaS"],
  },
  {
    id: 9,
    name: "Benchmark Capital",
    role: "Venture Partner",
    image: "https://via.placeholder.com/100",
    description:
      "Focused on early-stage investments in transformative companies.",
    specialties: ["Enterprise Software", "Fintech", "Social Media", "Tech"],
  },
  {
    id: 10,
    name: "Kleiner Perkins",
    role: "Venture Capitalist",
    image: "https://via.placeholder.com/100",
    description:
      "Well-known for funding early-stage companies and helping them scale globally.",
    specialties: ["Green Technology", "Biotech", "AI/ML", "Cloud Computing"],
  },
  {
    id: 11,
    name: "Matrix Partners",
    role: "Seed Investor",
    image: "https://via.placeholder.com/100",
    description:
      "Supports entrepreneurs in building great businesses across sectors.",
    specialties: ["Consumer Internet", "Cloud Infrastructure", "HealthTech"],
  },
  {
    id: 12,
    name: "Bessemer Venture Partners",
    role: "Venture Capitalist",
    image: "https://via.placeholder.com/100",
    description:
      "Invests in entrepreneurs with groundbreaking ideas in various industries.",
    specialties: ["Enterprise Software", "Healthcare", "Consumer Products"],
  },
  {
    id: 13,
    name: "GV (Google Ventures)",
    role: "Corporate Investor",
    image: "https://via.placeholder.com/100",
    description:
      "Supports founders who are creating the next big advancements in technology.",
    specialties: ["AI/ML", "Life Sciences", "Robotics", "Sustainability"],
  },
  {
    id: 14,
    name: "Fidelity Investments",
    role: "Institutional Investor",
    image: "https://via.placeholder.com/100",
    description:
      "A leading provider of investment solutions across the financial and technology sectors.",
    specialties: ["Fintech", "AI/ML", "SaaS", "Big Data"],
  },
  {
    id: 15,
    name: "Insight Partners",
    role: "Growth Equity Investor",
    image: "https://via.placeholder.com/100",
    description:
      "Helps high-growth technology companies scale rapidly.",
    specialties: ["Cloud Computing", "DevOps", "Enterprise Software"],
  },
];

const Company = () => {
  return (
    <section className="relative min-h-screen mt-20 bg-gradient-to-br from-indigo-900 to-purple-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-white drop-shadow-md">
            Explore Top Investors
          </h1>
          <p className="text-2xl text-white mt-4 font-bold">
            Discover leading investors, their focus areas, and specialties.
          </p>
        </div>

        {/* Investors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {investors.map((investor) => (
            <motion.div
              key={investor.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-6">
                <img
                  src={investor.image}
                  alt={investor.name}
                  className="w-20 h-20 object-contain rounded-md border-2 border-gray-200"
                />
                <h2 className="text-xl font-bold text-gray-800 text-right">
                  {investor.name}
                </h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">{investor.description}</p>
              <div className="mb-4">
                <h3 className="text-lg font-extrabold text-purple-900">
                  Focus Area: {investor.role}
                </h3>
                <p className="text-sm text-gray-500 mt-1 font-medium">
                  Specialties:
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                  {investor.specialties.map((specialty, index) => (
                    <li key={index} className="font-medium">
                      {specialty}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default Company;
