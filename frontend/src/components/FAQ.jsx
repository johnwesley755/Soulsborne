import React, { useState } from "react";
import { motion } from "framer-motion"; // For smooth animations
import { FiPlus, FiMinus } from "react-icons/fi"; // Plus/Minus icons

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleAnswer = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I post a job?",
      answer:
        "To post a job, simply click the 'Post Job' button, fill out the required information, and submit. Your job will be visible to freelancers immediately.",
    },
    {
      question: "How do I hire a freelancer?",
      answer:
        "You can browse through freelancer profiles, review their portfolios, and message them directly. Once you find the right fit, you can hire them for your job.",
    },
    {
      question: "What is the payment process?",
      answer:
        "We support secure payments through multiple channels. You can pay freelancers through our platform using credit card or PayPal.",
    },
    {
      question: "Is the platform free to use?",
      answer:
        "Yes, posting jobs is free. We only charge a small service fee when a freelancer is hired.",
    },
  ];

  return (  
    <div className="py-16">
      <div className="max-w-screen-lg mx-auto  text-center mb-12">
        <h2 className="text-4xl font-bold  text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-600">
          Find answers to the most common questions about using our platform.
        </p>
      </div>

      <div className="max-w-screen-lg mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 mb-6 cursor-pointer transform transition-all hover:scale-105"
            onClick={() => toggleAnswer(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-xl font-semibold text-gray-800">
                {faq.question}
              </h4>
              <span className="text-violet-600 text-2xl">
                {open === index ? <FiMinus /> : <FiPlus />}
              </span>
            </div>

            {open === index && (
              <motion.p
                className="mt-4 text-gray-700 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
