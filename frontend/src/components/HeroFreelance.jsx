import React from "react";
import freelanceImage from "../assets/freelance.svg"; // Ensure the image exists in the `assets` folder.
import { NavLink } from "react-router-dom";
import { MdOutlineLocalOffer } from "react-icons/md";
const HeroFreelance = () => {
  return (
    <div className="relative mt-20 p-8 text-black rounded-lg text-center lg:text-center">
      {/* Text Content */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold mb-4">
          Discover Freelance Opportunities
        </h1>
        <p className="text-lg lg:ml-20 lg:mr-20 mb-6 text-gray-800">
          Whether you're looking for exciting freelance jobs or seeking skilled
          professionals for your project, our platform connects the best talent
          with the right opportunities. Build your career, enhance your skills,
          and make an impact.
        </p>
        <div className="flex justify-center lg:justify-center gap-4">
          <NavLink to={"/signup"} className="btn_secondary_rounded flexCenter">
            Join Now
          </NavLink>
          <NavLink to={"/"} className="btn_dark_outline flexCenter gap-x-2">
            <MdOutlineLocalOffer className="text-2xl" />
            Learn more
          </NavLink>
        </div>
      </div>

      {/* Image Content */}
      <div className="flex justify-center">
        <img
          src={freelanceImage}
          alt="Freelancers working"
          className="rounded-lg shadow-lg w-full h-auto max-w-lg transform hover:scale-105 transition duration-300"
        />
      </div>
    </div>
  );
};

export default HeroFreelance;
