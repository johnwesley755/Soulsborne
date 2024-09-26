import React from "react";
import startupImg from "../assets/startup.svg"; // Replace with actual image paths
import rankingImg from "../assets/ranking.svg";
import educationImg from "../assets/education.svg";
import navigatorImg from "../assets/navigator.svg";
import freelanceImg from "../assets/freelancer.svg";
import synergyImg from "../assets/synergy.svg";
import testImg from "../assets/online-test.svg";
import courseImg from "../assets/course-completion.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderLib from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Arrow components defined first
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex", // Use flexbox
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        background: "white",
        borderRadius: "50%",
        right: "10px",
        zIndex: 1,
        padding: "10px",
        border: "2px solid black",
        width: "50px",
        height: "50px",
        cursor: "pointer", // Change cursor to pointer
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faChevronRight}
        style={{ color: "black", fontSize: "24px" }}
      />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex", // Use flexbox
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        background: "white",
        borderRadius: "50%",
        left: "10px",
        zIndex: 1,
        padding: "10px",
        border: "2px solid black",
        width: "50px",
        height: "50px",
        cursor: "pointer", // Change cursor to pointer
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faChevronLeft}
        style={{ color: "black", fontSize: "24px" }}
      />
    </div>
  );
};

const Slider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    swipe: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slidesData = [
    {
      image: startupImg,
      title: "Make Your Dream Life Into Reality",
      description: "This is a platform for students to achieve their dreams.",
    },
    {
      image: rankingImg,
      title: "Grow With Knowledge",
      description: "Empowering students through learning and growth.",
    },
    {
      image: educationImg,
      title: "Achieve Greatness",
      description: "Unlock your potential and achieve greatness in life.",
    },
    {
      image: navigatorImg,
      title: "Navigate Your Future",
      description: "Chart your course towards success and achievement.",
    },
    {
      image: freelanceImg,
      title: "Freelance Your Way to Success",
      description: "Use your skills and talents to create your own path.",
    },
    {
      image: synergyImg,
      title: "Synergy in Learning",
      description: "Collaborate and grow together with fellow students.",
    },
    {
      image: testImg,
      title: "Test Your Knowledge",
      description: "Track your progress and improve with continuous testing.",
    },
    {
      image: courseImg,
      title: "Complete Your Course",
      description:
        "Finish strong and earn certifications to advance your career.",
    },
  ];

  return (
    <section className="relative">
      <h1 className="text-center font-bold text-3xl mt-10">Key Achievements</h1>
      <SliderLib {...sliderSettings} className="overflow-hidden">
        {slidesData.map((slide, index) => (
          <div key={index} className="p-10">
            {" "}
            {/* Updated padding here */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-64 object-contain"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{slide.title}</h3>
                <p className="text-gray-700">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </SliderLib>
    </section>
  );
};

export default Slider;
