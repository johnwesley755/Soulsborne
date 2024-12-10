import { useState } from "react";
import { motion } from "framer-motion";
import teamMembers from "../services/member"; // Ensure your member.js includes the data.

const TeamSlider = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleViewProfile = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <motion.div
      className="px-6 py-10 bg-gradient-to-br from-indigo-900 to-purple-900 shadow-inner overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      {/* About the Team Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-white mb-6">Our Team</h2>
        <p className="text-lg text-gray-100 font-semibold max-w-4xl mx-auto">
          A dedicated team of professionals driven to make a difference. We
          specialize in innovation, teamwork, and excellence to achieve
          outstanding results. Meet the people behind our success.
        </p>
      </div>

      {/* Team Members List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-lg rounded-xl px-6 py-10 flex flex-col items-center"
          >
            <img
              src={member.image}
              alt={`${member.name}'s profile`}
              className="rounded-full mb-6 w-40 h-40 border-4 border-indigo-500 shadow-lg"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {member.name}
            </h3>
            <p className="text-gray-500 text-xl font-semibold italic">{member.role}</p>
            <motion.button
              onClick={() => handleViewProfile(member)}
              className="w-full text-center py-2 px-4 bg-indigo-900 text-white font-medium rounded-full cursor-pointer hover:bg-indigo-700 transition-all duration-300 mt-4"
             
            >
              View Profile
            </motion.button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMember && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="text-center">
              <img
                src={selectedMember.image}
                alt={`${selectedMember.name}'s profile`}
                className="rounded-full mb-6 w-28 h-28 border-4 border-indigo-500 shadow-lg mx-auto"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedMember.name}
              </h3>
              <p className="text-gray-500 italic">{selectedMember.role}</p>
              <p className="text-gray-600 mt-4">{selectedMember.bio}</p>
              <p className="text-gray-600 mt-2">
                <strong>Email:</strong> {selectedMember.email}
              </p>
              <p className="text-gray-600 mt-2">
                <strong>Skills:</strong> {selectedMember.skills.join(", ")}
              </p>
              <div className="flex gap-4 mt-4">
                {selectedMember.socialMedia?.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    className="text-indigo-600 hover:text-indigo-900 transition-all"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={`fab fa-${social.platform}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TeamSlider;
