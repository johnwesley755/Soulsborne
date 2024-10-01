import React from "react";
import { motion } from "framer-motion";
import tcsImage from "../assets/tcs.svg";
import infosysImage from "../assets/infosys.svg";
import wiproImage from "../assets/wipro.svg";
import hclImage from "../assets/hcl.svg";
import techMahindra from "../assets/tech-mahindra.svg";
import jioImage from "../assets/reliance-jio.svg";
import flipkartImage from "../assets/flipkart.svg";
import olaImage from "../assets/ola.svg";
import zomatoImage from "../assets/zomato.svg";
import swiggyImage from "../assets/swiggy.svg";
import paytmImage from "../assets/paytm.svg";
import phonepeImage from "../assets/phonepe.svg";
import byjusImage from "../assets/byjus.svg";
import oyoImage from "../assets/oyo.png";
import delhiveryImg from "../assets/delhivery.svg";
import hdfcImg from "../assets/hdfc-bank.svg";
import tataSteels from "../assets/tata-steel.svg";
import mahindraImg from "../assets/mahindra.svg";
import adaniImg from "../assets/adani.svg";
import larsenImg from "../assets/larsen-tourbo.svg";

// Sample company data
const companies = [
  {
    id: 1,
    name: "Tata Consultancy Services (TCS)",
    role: "Software Engineer",
    image: tcsImage,
    description:
      "India's largest IT services company, providing consulting and business solutions.",
    skills: ["Java", "Cloud Computing", "AI/ML", "Agile Development"],
  },
  {
    id: 2,
    name: "Infosys",
    role: "Data Scientist",
    image: infosysImage,
    description: "Global leader in technology services and consulting.",
    skills: ["Python", "Data Analysis", "SQL", "Machine Learning"],
  },
  {
    id: 3,
    name: "Wipro",
    role: "Cloud Architect",
    image: wiproImage,
    description: "Leader in IT, consulting, and business process services.",
    skills: ["AWS", "Azure", "DevOps", "Kubernetes"],
  },
  {
    id: 4,
    name: "HCL Technologies",
    role: "Cybersecurity Specialist",
    image: hclImage,
    description:
      "Global IT service company with expertise in digital solutions and product engineering.",
    skills: [
      "Network Security",
      "Penetration Testing",
      "Risk Management",
      "Firewalls",
    ],
  },
  {
    id: 5,
    name: "Tech Mahindra",
    role: "AI Engineer",
    image: techMahindra,
    description:
      "A leading provider of digital transformation, consulting, and business re-engineering.",
    skills: [
      "Deep Learning",
      "Natural Language Processing",
      "TensorFlow",
      "AI Algorithms",
    ],
  },
  {
    id: 6,
    name: "Reliance Jio",
    role: "DevOps Engineer",
    image: jioImage,
    description:
      "Telecom giant and technology innovator, providing cutting-edge solutions.",
    skills: ["CI/CD Pipelines", "Docker", "Ansible", "Kubernetes"],
  },
  {
    id: 7,
    name: "Flipkart",
    role: "Full Stack Developer",
    image: flipkartImage,
    description: "India's leading e-commerce marketplace.",
    skills: ["React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    id: 8,
    name: "Ola Cabs",
    role: "Mobile App Developer",
    image: olaImage,
    description:
      "India's popular ride-hailing company offering transportation services.",
    skills: ["Kotlin", "Swift", "React Native", "Flutter"],
  },
  {
    id: 9,
    name: "Zomato",
    role: "Product Manager",
    image: zomatoImage,
    description:
      "One of India's top food delivery platforms and restaurant guide services.",
    skills: ["Product Roadmap", "User Research", "Agile Methodology", "UI/UX"],
  },
  {
    id: 10,
    name: "Swiggy",
    role: "Backend Developer",
    image: swiggyImage,
    description:
      "India's largest and most popular online food ordering and delivery platform.",
    skills: ["Node.js", "Python", "SQL", "Microservices"],
  },
  {
    id: 11,
    name: "Paytm",
    role: "Blockchain Developer",
    image: paytmImage,
    description:
      "India's leading digital wallet and financial services platform.",
    skills: ["Blockchain Protocols", "Smart Contracts", "Ethereum", "Solidity"],
  },
  {
    id: 12,
    name: "PhonePe",
    role: "Data Engineer",
    image: phonepeImage,
    description: "A top player in the digital payments ecosystem.",
    skills: ["Big Data", "Hadoop", "Kafka", "Spark"],
  },
  {
    id: 13,
    name: "Byju's",
    role: "UI/UX Designer",
    image: byjusImage,
    description: "India's leading ed-tech company offering online education.",
    skills: ["Wireframing", "Prototyping", "Figma", "Adobe XD"],
  },
  {
    id: 14,
    name: "OYO Rooms",
    role: "Growth Hacker",
    image: oyoImage,
    description: "India's largest hospitality chain.",
    skills: ["SEO", "Digital Marketing", "Data Analytics", "User Acquisition"],
  },
  {
    id: 15,
    name: "Delhivery",
    role: "Supply Chain Manager",
    image: delhiveryImg,
    description: "Leading logistics and supply chain company in India.",
    skills: [
      "Supply Chain Management",
      "Logistics Planning",
      "Inventory Control",
    ],
  },
  {
    id: 16,
    name: "HDFC Bank",
    role: "Financial Analyst",
    image: hdfcImg,
    description: "One of India's largest private sector banks.",
    skills: ["Financial Modeling", "Data Analysis", "Risk Assessment", "Excel"],
  },
  {
    id: 17,
    name: "Tata Steel",
    role: "Mechanical Engineer",
    image: tataSteels,
    description: "India's top steel manufacturer and global industry leader.",
    skills: [
      "CAD",
      "Structural Analysis",
      "Thermodynamics",
      "Material Science",
    ],
  },
  {
    id: 18,
    name: "Mahindra & Mahindra",
    role: "Automotive Engineer",
    image: mahindraImg,
    description: "Leading manufacturer of automobiles and commercial vehicles.",
    skills: [
      "Automobile Design",
      "Vehicle Dynamics",
      "Electric Vehicles",
      "CAD",
    ],
  },
  {
    id: 19,
    name: "Adani Group",
    role: "Energy Consultant",
    image: adaniImg,
    description:
      "A diversified business conglomerate with interests in energy, infrastructure, and logistics.",
    skills: [
      "Energy Management",
      "Renewable Energy",
      "Power Systems",
      "Sustainability",
    ],
  },
  {
    id: 20,
    name: "Larsen & Toubro (L&T)",
    role: "Civil Engineer",
    image: larsenImg,
    description: "India's leading engineering and construction company.",
    skills: [
      "Structural Engineering",
      "Project Management",
      "Construction Design",
      "AutoCAD",
    ],
  },
];

const Company = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-blue-600 to-purple-800 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white">
            Explore Top Indian Companies
          </h1>
          <p className="text-xl text-white mt-4">
            Discover in-demand roles, required skills, and top companies in
            India
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {companies.map((company) => (
            <motion.div
              key={company.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-16 h-16 object-contain"
                />
                <h2 className="text-xl font-semibold text-gray-800">
                  {company.name}
                </h2>
              </div>
              <p className="text-md text-gray-600 mb-4">
                {company.description}
              </p>
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800">
                  In-demand Role: {company.role}
                </h3>
                <p className="text-sm text-gray-500">Skills Needed:</p>
                <ul className="list-disc pl-6 text-gray-600">
                  {company.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
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
