import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderLib from "react-slick";

const Slider = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 7000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
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
      image:
        "https://images.pexels.com/photos/3819176/pexels-photo-3819176.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000",
      title: "Dream Big",
      description: "Transform your aspirations into reality with us.",
      additionalText:
        "We believe in pushing the limits of what’s possible to create a future where dreams are no longer just dreams.",
    },
    {
      image:
        "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000",
      title: "Knowledge is Power",
      description: "Empowering students for a brighter future.",
      additionalText:
        "Education and knowledge are the keys to success, and we're here to help unlock your potential.",
    },
    {
      image:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000",
      title: "Achieve Success",
      description: "Unlock your potential and reach new heights.",
      additionalText:
        "Success comes when you work hard, dream big, and keep moving forward—no matter the obstacles.",
    },
    {
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000",
      title: "Plan Your Future",
      description: "Take control of your destiny with our tools.",
      additionalText:
        "Effective planning leads to effective execution. Take control and build a roadmap to success.",
    },
    {
      image:
        "https://images.pexels.com/photos/3184453/pexels-photo-3184453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000",
      title: "Freelance to Freedom",
      description: "Build your path to independence and success.",
      additionalText:
        "Freelancing offers the freedom to choose your path. Let us help you create the perfect future.",
    },
    {
      image:
        "https://images.pexels.com/photos/3184323/pexels-photo-3184323.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000",
      title: "Leadership",
      description: "Inspire others and lead the way.",
      additionalText:
        "Leadership is not just about directing; it’s about inspiring and empowering those around you.",
    },
    {
      image:
        "https://images.pexels.com/photos/3184636/pexels-photo-3184636.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000",
      title: "Innovation",
      description: "Pushing the boundaries of creativity.",
      additionalText:
        "Innovation isn't just about ideas; it’s about creating something that changes the world.",
    },
    {
      image:
        "https://images.pexels.com/photos/3184630/pexels-photo-3184630.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000",
      title: "Teamwork",
      description: "Achieve greatness together.",
      additionalText:
        "Together we can accomplish more. Let's unite our strengths and achieve collective success.",
    },
    {
      image:
        "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000",
      title: "Education",
      description: "Unlock knowledge for brighter futures.",
      additionalText:
        "Education is the foundation of progress. Join us in making knowledge accessible to everyone.",
    },
    {
      image:
        "https://images.pexels.com/photos/3184361/pexels-photo-3184361.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000",
      title: "Entrepreneurship",
      description: "Build and innovate for a better tomorrow.",
      additionalText:
        "Entrepreneurship is about creating opportunities, and we're here to support you in every step.",
    },
  ];

  return (
    <section className="relative bg-white md:pb-16 pt-16">
      <h1 className="text-center text-black font-extrabold text-5xl mb-5">
        Our Achievements
      </h1>
      <p className="text-center font-bold text-lg mx-8 text-gray-600 mb-12">
        At the heart of our journey, we've embraced innovation, leadership, and
        teamwork. Here's a glimpse of our greatest achievements, showcasing the
        impact we are making every day.
      </p>
      <div className="mx-auto">
        <SliderLib {...sliderSettings} className="overflow-hidden w-full">
          {slidesData.map((slide, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-3 text-gray-800">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 font-semibold text-lg mb-2">
                    {slide.description}
                  </p>
                  <p className="text-gray-500 font-semibold text-sm">
                    {slide.additionalText}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </SliderLib>
      </div>
    </section>
  );
};

export default Slider;
