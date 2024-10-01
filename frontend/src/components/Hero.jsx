import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineLocalOffer } from "react-icons/md";
import heroImg from "../assets/hero-img.svg";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="path/to/your/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="bg-blue-50 opacity-75 w-full h-full"></div>{" "}
        {/* Background Color Overlay */}
      </div>

      <div className="max_padd_container flex flex-col lg:flex-row items-center justify-between gap-10 py-16 lg:pb-28">
        {/* Hero Text Content */}
        <div className="flex-1 z-10">
          <h1 className="h1 capitalize max-w-[37rem]">
            Let’s Make Your Dream Life Into Reality
          </h1>
          <p className="text-gray-600 regular-16 mt-6 max-w-[33rem]">
            The Ultimate platform for students
          </p>
          <div className="flex max-xs:flex-col gap-2 mt-5">
            <NavLink to={"/home"} className="btn_secondary_rounded flexCenter">
              Join Now
            </NavLink>
            <NavLink to={"/"} className="btn_dark_outline flexCenter gap-x-2">
              <MdOutlineLocalOffer className="text-2xl" />
              Learn more
            </NavLink>
          </div>
        </div>
        {/* Hero Image */}
        <div className="hero-image flex-1 z-10">
          <img
            src={heroImg}
            alt="Hero Section"
            className="mt-8 lg:mt-0 w-full"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="pb-20">
        <div className="max_padd_container flex flex-col lg:flex-row justify-around items-center">
          <div className="text-center">
            <h2 className="text-5xl font-bold">500+</h2>
            <p className="text-gray-600">Courses Available</p>
          </div>
          <div className="text-center">
            <h2 className="text-5xl font-bold">100K+</h2>
            <p className="text-gray-600">Students Enrolled</p>
          </div>
          <div className="text-center">
            <h2 className="text-5xl font-bold">98%</h2>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <h2 className="text-5xl font-bold">24/7</h2>
            <p className="text-gray-600">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
