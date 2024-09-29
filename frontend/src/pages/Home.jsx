import React from "react";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import SharpenSkills from "../components/SharpenSkills";
import Connect from "../components/Connect";
import StayUpdated from "../components/StayUpdated";
import GetPlaced from "../components/GetPlaced";
import FocusAndKillProcrastination from "../components/FocusAndKillProcrastination";
import BuildCompetitiveness from "../components/BuildCompetitiveness";
const Home = () => {
  return (
    <div>
      <Hero />
      <Slider />
      <SharpenSkills />
      <Connect />
      <GetPlaced />
      <StayUpdated />
      <FocusAndKillProcrastination />
      <BuildCompetitiveness />
    </div>
  );
};

export default Home;
