// src/pages/CommunityPage.jsx

import React from "react";
import MemberHighlightCard from "../components/MemberHighlightCard";
import EventCard from "../components/EventCard";
import ForumCard from "../components/ForumCard";
import TestimonialCard from "../components/TestimonialCard";
import ResourceCard from "../components/ResourceCard";
import NewsCard from "../components/NewsCard";

const CommunityPage = () => {
  // Example community data
  // Extended community data
  const members = [
    {
      id: 1,
      name: "Alice Johnson",
      profession: "Full-stack Developer",
      profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
      bio: "Alice loves building scalable web apps and teaching coding to newbies.",
    },
    {
      id: 2,
      name: "Mark Smith",
      profession: "UI/UX Designer",
      profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
      bio: "Mark is passionate about creating intuitive user interfaces and experiences.",
    },
    {
      id: 3,
      name: "Emma Davis",
      profession: "Data Scientist",
      profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
      bio: "Emma enjoys working with data to extract valuable insights and help businesses make data-driven decisions.",
    },
    {
      id: 4,
      name: "James Brown",
      profession: "Machine Learning Engineer",
      profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
      bio: "James is focused on building AI models and automating business processes to improve efficiency.",
    },
  ];

  const events = [
    {
      id: 1,
      title: "React Meetup - Virtual Event",
      date: "2024-12-15",
      location: "Online",
      description:
        "Join us for a deep dive into React.js and its latest features!",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", // React Meetup
    },
    {
      id: 2,
      title: "JavaScript Workshop",
      date: "2024-12-20",
      location: "Tech Hub, New York",
      description:
        "A hands-on workshop for JavaScript enthusiasts and beginners.",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", // JavaScript Workshop
    },
    {
      id: 3,
      title: "AI for Beginners",
      date: "2024-12-25",
      location: "Tech Hub, San Francisco",
      description:
        "Learn the basics of Artificial Intelligence and how it can transform industries.",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", // AI Event
    },
    {
      id: 4,
      title: "UX/UI Design Trends 2025",
      date: "2025-01-10",
      location: "Design Studio, Chicago",
      description:
        "Explore the latest design trends and how to implement them in your projects.",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", // UX/UI Design Event
    },
  ];

  // Extended forums data
  const forums = [
    {
      id: 1,
      topic: "Best practices for React",
      replies: 15,
    },
    {
      id: 2,
      topic: "Designing for accessibility",
      replies: 8,
    },
    {
      id: 3,
      topic: "Building scalable apps with Node.js",
      replies: 22,
    },
    {
      id: 4,
      topic: "Understanding Cloud Computing",
      replies: 30,
    },
  ];

  // Extended testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Samantha Green",
      role: "Software Engineer",
      testimonialText:
        "This community is fantastic! I’ve learned so much from the workshops and the members. The support here is unparalleled.",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 2,
      name: "David Lee",
      role: "Product Manager",
      testimonialText:
        "Being part of this community has helped me grow professionally. The events are so informative, and the people are amazing!",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 3,
      name: "Jessica Carter",
      role: "Web Developer",
      testimonialText:
        "The best decision I made was joining this community. The networking opportunities are endless, and I’ve found great collaborators!",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 4,
      name: "Robert Wilson",
      role: "Mobile App Developer",
      testimonialText:
        "I’ve been able to improve my skills and get involved in exciting projects thanks to this supportive community.",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];

  // Updated resources data structure
  const resources = [
    {
      id: 1,
      title: "React Documentation",
      description:
        "Comprehensive guide for learning React.js, including hooks and components.",
      link: "https://reactjs.org/docs/getting-started.html",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1400/1*2AN2uA9ci-5ZSoFgUksZhQ.png", // Placeholder image
      tags: ["React", "JavaScript", "Frontend"],
      date: "2024-12-01",
    },
    {
      id: 2,
      title: "JavaScript Guide",
      description:
        "Official guide to JavaScript programming, perfect for beginners and advanced users.",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
      imageUrl:
        "https://blog.logrocket.com/wp-content/uploads/2021/05/javascript-svg-canvas.png", // Placeholder image
      tags: ["JavaScript", "Programming", "Beginner"],
      date: "2024-11-20",
    },
    {
      id: 3,
      title: "CSS Tricks",
      description:
        "In-depth articles on CSS layout techniques, animations, and design tips.",
      link: "https://css-tricks.com/",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWniV6-mYVeIy0NwNIkr2GK3F5bvkyxQFdvA&s", // Placeholder image
      tags: ["CSS", "Web Design", "Frontend"],
      date: "2024-10-15",
    },
    {
      id: 4,
      title: "Design Patterns",
      description:
        "Learn about common design patterns in software development, including creational, structural, and behavioral patterns.",
      link: "https://refactoring.guru/design-patterns",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/034/794/642/non_2x/ui-design-flat-icon-pack-web-icons-basic-ui-icons-illustration-vector.jpg", // Placeholder image
      tags: ["Design Patterns", "Software Engineering", "Development"],
      date: "2024-09-10",
    },
  ];
const newsData = [
  {
    title: "Revolutionizing Education: Top Trends in 2024",
    date: "December 4, 2024",
    summary:
      "Explore the latest trends in education technology that are transforming the classroom experience in 2024.",
    category: "Education",
    image:
      "https://plus.unsplash.com/premium_photo-1661909267383-58991abdca51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    title: "AI in the Classroom: The Future of Learning",
    date: "December 3, 2024",
    summary:
      "How artificial intelligence is reshaping education, from personalized learning to AI-powered teaching assistants.",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy",
    link: "#",
  },
  {
    title: "Online Learning: Breaking Barriers in Education",
    date: "December 2, 2024",
    summary:
      "The rise of online learning platforms is making education more accessible to students around the world.",
    category: "Education",
    image:
      "https://plus.unsplash.com/premium_photo-1663013500813-328e1ab77be7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    title: "Global Education: Challenges and Opportunities in 2024",
    date: "December 1, 2024",
    summary:
      "A look at the challenges and opportunities facing global education systems in 2024, with a focus on equity and access.",
    category: "Education",
    image:
      "https://media.istockphoto.com/id/1003989350/photo/holographic-earth-on-smartphone.jpg?s=2048x2048&w=is&k=20&c=h3UhX1Fl9NODs008OhuVha5dvpsP6KZYszPJuDA8x64=",
    link: "#",
  },
  {
    title: "The Importance of Mental Health in Education",
    date: "November 30, 2024",
    summary:
      "Why prioritizing mental health support in schools and universities is essential for student success.",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    title: "Virtual Reality: A Game Changer for Education",
    date: "November 29, 2024",
    summary:
      "How virtual reality is creating immersive learning environments, making education more engaging and effective.",
    category: "Education",
    image:
      "https://plus.unsplash.com/premium_photo-1661402170986-1b47b4b397ab?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    title: "Student Loan Crisis: How It Impacts the Future of Education",
    date: "November 28, 2024",
    summary:
      "A deep dive into the growing student loan crisis and how it affects students, families, and educational institutions.",
    category: "Education",
    image:
      "https://plus.unsplash.com/premium_photo-1661322633114-08d0b77758b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    title: "Empowering Teachers: Professional Development in 2024",
    date: "November 27, 2024",
    summary:
      "The role of continuous professional development in empowering teachers to meet the demands of modern education.",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    title: "Gamification: Revolutionizing Student Engagement",
    date: "November 26, 2024",
    summary:
      "How gamification techniques are increasing student engagement and motivation in both classrooms and online courses.",
    category: "Education",
    image:
      "https://plus.unsplash.com/premium_photo-1725907643556-e987fab4b09d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
  },
  {
    title: "Sustainable Education: Green Schools of the Future",
    date: "November 25, 2024",
    summary:
      "How educational institutions are adopting sustainable practices and creating environmentally friendly campuses.",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy",
    link: "#",
  },
];


  return (
    <div className="bg-gray-100 mt-20 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-700 text-white text-center py-12 md:py-20 mb-12 md:mb-16 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-shadow-md animate__animated animate__fadeIn">
            Welcome to Our Community
          </h1>
          <p className="mt-4 sm:mt-6 text-white text-lg sm:text-xl leading-relaxed">
            Connect, collaborate, and grow together! 🚀
          </p>
          <div className="mt-4 sm:mt-6 text-3xl sm:text-4xl">
            <i className="fas fa-users"></i>{" "}
            {/* Optional icon for more flair */}
          </div>
        </div>

        {/* Member Highlights */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Featured Members
          </h2>
          <div className="grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
            {members.map((member) => (
              <MemberHighlightCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Events Section */}
        <section className="py-12">
          <h2 className="text-3xl font-semibold text-center text-black mb-6">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        {/* Forum Section */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-6">
            Discussion Forums
          </h2>
          <div className="space-y-6">
            {forums.map((forum) => (
              <ForumCard key={forum.id} forum={forum} />
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white py-12 mt-12 shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold text-center mb-6">
            What Our Members Say
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Resource Section */}
        <section className="py-12 mt-12 rounded-lg">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Useful Resources
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </section>

        {/* News & Updates Section */}
        <section className="py-12 rounded-lg bg-gradient-to-b from-violet-500 to-indigo-600">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-center text-white mb-10">
              Latest Education News
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsData.map((news, index) => (
                <NewsCard key={index} news={news} />
              ))}
            </div>
          </div>
        </section>

        {/* Join the Community Call to Action */}
        <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-12 mt-12 text-center rounded-lg shadow-lg">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-extrabold mb-4">
              Join Our Community Today
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Become a member and start collaborating with like-minded people to
              grow and achieve your goals!
            </p>
            <a
              href="/signup"
              className="inline-block bg-white text-indigo-600 font-semibold text-lg px-8 py-4 rounded-full shadow-md hover:bg-indigo-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Sign Up Now
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommunityPage;
