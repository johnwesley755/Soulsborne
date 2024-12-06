import React from "react";

const HeroFreelance = () => {
  const services = [
    {
      title: "Web Development",
      description: "Build modern and responsive websites.",
      icon: "🌐",
      link: "/services/web-development",
    },
    {
      title: "Graphic Design",
      description: "Create stunning logos, banners, and more.",
      icon: "🎨",
      link: "/services/graphic-design",
    },
    {
      title: "Digital Marketing",
      description: "Boost your business with SEO and ads.",
      icon: "📈",
      link: "/services/digital-marketing",
    },
    {
      title: "Content Writing",
      description: "Craft engaging articles and blogs.",
      icon: "✍️",
      link: "/services/content-writing",
    },
    {
      title: "Video Editing",
      description: "Produce professional-quality videos.",
      icon: "🎥",
      link: "/services/video-editing",
    },
    {
      title: "App Development",
      description: "Develop feature-rich mobile applications.",
      icon: "📱",
      link: "/services/app-development",
    },
    {
      title: "Social Media Management",
      description: "Grow your social media presence.",
      icon: "📱",
      link: "/services/social-media-management",
    },
    {
      title: "UI/UX Design",
      description: "Design intuitive and user-friendly interfaces.",
      icon: "🖌️",
      link: "/services/ui-ux-design",
    },
    {
      title: "Photography",
      description: "Capture stunning visuals for your needs.",
      icon: "📸",
      link: "/services/photography",
    },
    {
      title: "Voiceover Services",
      description: "Professional voiceovers for any project.",
      icon: "🎤",
      link: "/services/voiceover",
    },
    {
      title: "Virtual Assistance",
      description: "Administrative help to streamline your work.",
      icon: "💼",
      link: "/services/virtual-assistance",
    },
    {
      title: "Data Analysis",
      description: "Analyze and interpret your business data.",
      icon: "📊",
      link: "/services/data-analysis",
    },
  ];

  return (
    <div className="bg-gradient-to-tl from-indigo-900 to-purple-900 mt-20 text-white min-h-screen">
      {/* Hero Header */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Find the Perfect Freelance Services
        </h1>
        <p className="text-lg md:text-xl mb-10 text-white">
          Get access to skilled freelancers in various domains to help your
          business grow.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="What service are you looking for?"
            className="w-full p-4 rounded-full shadow-lg text-gray-800 focus:outline-none"
          />
          <button className="absolute right-2 top-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-semibold shadow-md transition duration-300">
            Search
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Popular Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a
              href={service.link}
              key={index}
              className="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 group"
            >
              <div className="flex items-center justify-center text-5xl mb-4 group-hover:text-indigo-600">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center group-hover:text-indigo-700">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroFreelance;
