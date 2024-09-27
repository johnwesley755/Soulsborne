import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineLocalOffer } from "react-icons/md";
import heroImg from "../assets/hero-img.svg";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20">
      <div className="max_padd_container flex flex-col mt-10 lg:flex-row items-center justify-between gap-10 py-16 bg-blue-50 lg:py-32">
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
              Buy Now
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
      {/* Ensure there's enough space for content below the hero section */}
      <div className="absolute inset-0 bg-blue-50 -z-10"></div>
    </section>
  );
};

export default Hero;
