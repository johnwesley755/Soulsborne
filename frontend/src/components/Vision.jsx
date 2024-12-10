import { motion } from "framer-motion";

const Vision = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white min-h-screen mt-20 px-10 py-16">
      {/* Section Heading */}
      <motion.h1
        className="text-6xl font-extrabold text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Vision
      </motion.h1>

      <div className="flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://www.aviraliftandescalators.com/wp-content/uploads/2017/10/vision.jpg"
            alt="Vision"
            className="rounded-lg shadow-xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="w-full lg:w-1/2 lg:pl-10 text-center lg:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold text-white mb-6">
            Envisioning a Better Tomorrow
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-white font-semibold">
            At the core of our vision lies the dream of a future where
            technology and creativity merge seamlessly, creating opportunities
            for collaboration, empowerment, and innovation. We aim to craft
            solutions that not only solve problems but also inspire change.
          </p>

          {/* Highlighted Points */}
          <div className="mb-8">
            <motion.div
              className="flex items-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="bg-indigo-500 text-white w-8 h-8 flex justify-center items-center rounded-full font-bold mr-4">
                1
              </span>
              <p className="text-lg font-semibold text-white">
                Empower communities through innovative solutions.
              </p>
            </motion.div>
            <motion.div
              className="flex items-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="bg-purple-500 text-white w-8 h-8 flex justify-center items-center rounded-full font-bold mr-4">
                2
              </span>
              <p className="text-lg font-semibold text-white">
                Foster collaboration between individuals and industries.
              </p>
            </motion.div>
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <span className="bg-pink-500 text-white w-8 h-8 flex justify-center items-center rounded-full font-bold mr-4">
                3
              </span>
              <p className="text-lg text-white font-semibold">
                Inspire progress and cultivate meaningful impact.
              </p>
            </motion.div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
            <motion.button
              className="px-8 py-3 bg-white text-indigo-800 rounded-full font-bold shadow-lg hover:bg-gray-200 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Learn More
            </motion.button>
            <motion.button
              className="px-8 py-3 bg-indigo-700 text-white rounded-full font-bold shadow-lg hover:bg-indigo-800 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
