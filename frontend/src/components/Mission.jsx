import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-white text-gray-900 min-h-screen px-10 py-16">
      {/* Section Heading */}
      <motion.h1
        className="text-6xl font-extrabold text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Mission
      </motion.h1>

      <div className="flex flex-col lg:flex-row items-center">
        {/* Content Section */}
        <motion.div
          className="w-full lg:w-1/2 lg:pr-10 text-center lg:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
            Driving Change, Inspiring Innovation
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-700 font-medium">
            Our mission is to create transformative solutions that address the
            most pressing challenges of today. We strive to empower individuals,
            bridge gaps, and inspire collaboration to build a sustainable and
            inclusive future.
          </p>

          {/* Highlighted Points */}
          <div className="mb-8">
            <motion.div
              className="flex items-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="bg-blue-500 text-white w-8 h-8 flex justify-center items-center rounded-full font-bold mr-4">
                1
              </span>
              <p className="text-lg font-medium text-gray-800">
                Address challenges with impactful solutions.
              </p>
            </motion.div>
            <motion.div
              className="flex items-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="bg-green-500 text-white w-8 h-8 flex justify-center items-center rounded-full font-bold mr-4">
                2
              </span>
              <p className="text-lg font-medium text-gray-800">
                Foster innovation and creativity.
              </p>
            </motion.div>
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <span className="bg-teal-500 text-white w-8 h-8 flex justify-center items-center rounded-full font-bold mr-4">
                3
              </span>
              <p className="text-lg font-medium text-gray-800">
                Promote inclusivity and sustainability.
              </p>
            </motion.div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
            <motion.button
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Learn More
            </motion.button>
            <motion.button
              className="px-8 py-3 bg-gray-300 text-gray-800 rounded-full font-bold shadow-lg hover:bg-gray-400 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Mission"
            className="rounded-lg shadow-xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
